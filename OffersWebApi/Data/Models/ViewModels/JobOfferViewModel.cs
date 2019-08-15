using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace OffersWebApi.Data.Models.ViewModels
{
    public class JobOfferViewModel
    {
        [Key]
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }

        [JsonProperty(PropertyName = "dateFrom")]
        public DateTime DateFrom { get; set; }

        [JsonProperty(PropertyName = "dateTo")]
        public DateTime DateTo { get; set; }

        [JsonProperty(PropertyName = "linkToTheForm")]
        public string LinkToTheForm { get; set; }

        [JsonProperty(PropertyName = "linkToFile")]
        public string LinkToFile { get; set; }
    }
}