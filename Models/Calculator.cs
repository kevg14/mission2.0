using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;

namespace MyFirstASPNETWebApp.Models
{
    public class Calculator
    {
        [Range(0,100,ErrorMessage = "Input a number between 0-100")]
        [Required]
        public decimal assign { get; set; }
        [Range(0, 100, ErrorMessage = "Input a number between 0-100")]
        [Required]
        public decimal group { get; set; }
        [Range(0, 100, ErrorMessage = "Input a number between 0-100")]
        [Required]
        public decimal quiz { get; set; }
        [Range(0, 100, ErrorMessage = "Input a number between 0-100")]
        [Required]
        public decimal exam { get; set; }
        [Range(0, 100, ErrorMessage = "Input a number between 0-100")]
        [Required]
        public decimal intex { get; set; }




        //Setter
        //public void setFrom(string input)
        //{
        //    this.From = input;
        //}

        //public string getFrom(string input)
        //{
        //    return this.From;
        //}


        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940

    }
}

