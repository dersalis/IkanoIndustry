using System;
using System.Collections.Generic;
using System.Linq;
using OffersWebApi.Data;
using OffersWebApi.Data.Models.ViewModels;

namespace OffersWebApi.Services
{
    public interface IJobOffersService
    {
        IEnumerable<JobOfferViewModel> GetActive();
    }

    public class JobOffersService : IJobOffersService
    {
        ApplicationDbContext _db;
        public JobOffersService(ApplicationDbContext db) 
        {
            _db = db;
        }

        public IEnumerable<JobOfferViewModel> GetActive()
        {
            var offers = _db.JobOffers.Where(o => o.Active == true && o.DateTo >= DateTime.Now).Select(s => new JobOfferViewModel{
                Id = s.Id,
                Title = s.Title,
                DateFrom = s.DateFrom,
                DateTo = s.DateTo,
                LinkToTheForm = s.LinkToTheForm,
                LinkToFile = "brak"
            });
            return offers;
        }
    }
}