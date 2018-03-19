using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Api.Entities
{
    [Table("Roles")]
    public class Rol {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [StringLength(100)]
        public string Id { get; set; }
        [Required]
        [StringLength(300)]
        public string Nombre { get; set; }
        public ICollection<UsuarioRol> Usuarios { get; set; }
    }
}