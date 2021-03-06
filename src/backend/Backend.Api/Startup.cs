﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Api.Entities;
using Backend.Api.Exceptions;
using Backend.Api.Services;
using FluentValidation;
using GlobalExceptionHandler.WebApi;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace Backend.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddCors();

            services
                .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie();

            services.AddDbContext<BackendDb>(options => 
                options.UseSqlite(Configuration.GetConnectionString("DefaultConnection"))
            );

            services.AddTransient<PasswordHasher>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            app.UseCors(config => {
                config
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin();
            });
    
            app.UseExceptionHandler().WithConventions(x => {
                x.ContentType = "application/json";
                x.MessageFormatter(e => JsonConvert.SerializeObject(new { e.Message }));

                x.ForException<ValidationException>()
                    .ReturnStatusCode(400)
                    .UsingMessageFormatter((e, context) => {
                        var ex = e as ValidationException;
                        return JsonConvert.SerializeObject(new { ex.Message, ex.Errors });
                    });

                x.ForException<AutenticacionException>()
                    .ReturnStatusCode(400);

                x.ForException<RecordNotFoundException>()
                    .ReturnStatusCode(404)
                    .UsingMessageFormatter((e, c) => "Http Not Found");
            });
 
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
