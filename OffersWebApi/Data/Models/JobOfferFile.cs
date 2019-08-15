using System;
using System.ComponentModel.DataAnnotations;

namespace OffersWebApi.Data.Models
{
    public class JobOfferFile
    {
        [Key]
        public int Id { get; set; }
        public string FileName { get; set; }
        public string FileExtension { get; set; }
        public byte[] FileContent { get; set; }
        public string FileContentType { get; set; }
        public decimal FileSize { get; set; }
        public string ImportedBy { get; set; }
        public DateTime ImportedDate { get; set; }
        public int JobOfferId { get; set; }
    }
}