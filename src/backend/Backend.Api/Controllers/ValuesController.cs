using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Api.Exceptions;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            throw new RecordNotFoundException();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {

            var z = default(ValidationException);
            z.Data.Add("a", "a");

            var failures = new[]{ 
                new ValidationFailure("Nombre", "Debe tener x cantidad de letras"),
                new ValidationFailure("FechaNacimiento", "Debe ser mayor de edad"),
            };
            throw new ValidationException("Error del servidor :(", failures);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
