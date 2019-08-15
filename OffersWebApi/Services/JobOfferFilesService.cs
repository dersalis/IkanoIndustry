using System.Linq;
using OffersWebApi.Data;
using OffersWebApi.Data.Models;

namespace OffersWebApi.Services
{
    public interface IJobOfferFilesService
    {
        JobOfferFile GetFileByOfferId(int offerId);
    }

    public class JobOfferFilesService : IJobOfferFilesService
    {
        ApplicationDbContext _db;
        public JobOfferFilesService(ApplicationDbContext db) 
        {
            _db = db;
        }

        public JobOfferFile GetFileByOfferId(int offerId)
        {
            var file = _db.JobOfferFiles.FirstOrDefault(f => f.JobOfferId == offerId);
            if(file == null) throw new System.Exception("Nie znaleziono pliku dla danej oferty!");
            return file;
        }
    }
}