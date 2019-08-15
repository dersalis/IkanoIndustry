using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace OffersWebApi.Data.Models
{
    public class JobOffer
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

        [JsonProperty(PropertyName = "active")]
        public bool? Active { get; set; }

        [JsonProperty(PropertyName = "createdBy")]
        public string CreatedBy { get; set; }

        [JsonProperty(PropertyName = "createdDate")]
        public DateTime CreatedDate { get; set; }

        [JsonProperty(PropertyName = "updatedBy")]
        public string UpdatedBy { get; set; }

        [JsonProperty(PropertyName = "updatedDate")]
        public DateTime? UpdatedDate { get; set; }

        [JsonProperty(PropertyName = "linkToTheForm")]
        public string LinkToTheForm { get; set; }
    }
}