using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Api.Models
{
    public class AutenticarRequestModel
    {
        [Required]
        [MaxLength(200)]
        public string Login { get; set; }

        [Required]
        [MaxLength(200)]
        public string Clave { get; set; }
    }

    public class AutenticarResponseModel
    {
        public Guid Id { get; set; }
        public string Login { get; set; }
        public string Nombre { get; set; }
        public string Correo { get; set; }
        public string[] Roles { get; set; }
    }
}