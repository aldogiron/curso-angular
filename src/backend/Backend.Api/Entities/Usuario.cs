using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Api.Entities
{
    public class Usuario {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Login { get; set; }

        [Required]
        [StringLength(44)]
        public string Clave { get; set; }

        [Required]
        [StringLength(24)]
        public string Salt { get; set; }

        [Required]
        [StringLength(200)]
        public string Correo { get; set; }

        [Required]
        [StringLength(300)]
        public string Nombre { get; set; }
        public ICollection<UsuarioRol> Roles { get; set; }
    }
}