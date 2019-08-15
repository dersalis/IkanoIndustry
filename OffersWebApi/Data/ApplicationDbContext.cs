using Microsoft.EntityFrameworkCore;
using OffersWebApi.Data.Models;

namespace OffersWebApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<JobOffer>().ToTable("JobOffers");
            modelBuilder.Entity<JobOfferFile>().ToTable("JobOffersFiles");
        }

        public DbSet<JobOffer> JobOffers { get; set; }
        public DbSet<JobOfferFile> JobOfferFiles { get; set; }
    }
}