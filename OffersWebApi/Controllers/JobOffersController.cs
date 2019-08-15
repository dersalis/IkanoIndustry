using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using OffersWebApi.Data.Models.ViewModels;
using OffersWebApi.Services;

namespace OffersWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobOffersController : ControllerBase
    {
        private IJobOffersService _joService;
        private IJobOfferFilesService _jofService;
        public JobOffersController(IJobOffersService joService, IJobOfferFilesService jofService)
        {
            _joService = joService;
            _jofService = jofService;
        }

        // api/joboffers/getactive
        [HttpGet("GetActive")]
        [EnableCors("VulconPolicy")]
        public ActionResult<IEnumerable<JobOfferViewModel>> GetActive()
        {
            var offers = _joService.GetActive();
            return new JsonResult(offers, new JsonSerializerSettings(){ Formatting = Formatting.Indented });
        }

        // api/joboffers/GetOfferFile?offerId=1060
        [HttpGet("GetOfferFile")]
        [EnableCors("VulconPolicy")]
        public FileResult GetOfferFile(int offerId)
        {
            var fileFromDb = _jofService.GetFileByOfferId(offerId);

            var fileContent = fileFromDb.FileContent;
            
            return File(fileContent, "application/pdf");
        }
    }
}