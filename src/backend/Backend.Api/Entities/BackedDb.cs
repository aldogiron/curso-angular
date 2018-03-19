using Microsoft.EntityFrameworkCore;

namespace Backend.Api.Entities
{
    public class BackendDb: DbContext
    {

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Rol> Roles  { get; set; }
        public DbSet<UsuarioRol> UsuarioRoles { get; set; }

        public BackendDb(DbContextOptions<BackendDb> options): base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Usuario>()
                .HasIndex(x => x.Login)
                .IsUnique();

            modelBuilder.Entity<Usuario>()
                .HasIndex(x => x.Correo)
                .IsUnique();

            modelBuilder.Entity<UsuarioRol>()
                .HasKey(x => new { x.UsuarioId, x.RolId });

            modelBuilder.Entity<UsuarioRol>()
                .HasOne(x => x.Usuario)
                .WithMany(x => x.Roles)
                .HasForeignKey(x => x.UsuarioId);

            modelBuilder.Entity<UsuarioRol>()
                .HasOne(x => x.Rol)
                .WithMany(x => x.Usuarios)
                .HasForeignKey(x => x.RolId);
        }
    }
}