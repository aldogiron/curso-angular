using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Api.Entities
{
    [Table("Usuarios_Roles")]
    public class UsuarioRol
    {
        public Guid UsuarioId { get; set; }

        public string RolId { get; set; }

        [ForeignKey("UsuarioId")]
        public Usuario Usuario { get; set; }

        [ForeignKey("RolId")]
        public Rol Rol { get; set; }
    }
}