<script type="text/javascript">
  defaultCalculation();
  function defaultCalculation(){
    var adultValue = "";
    var kidValue = "";
    var ageOfOldestMember = 0;

    document.getElementById("adultValueDD").value = "";
    document.getElementById("kidValueDD").value = "";

    document.getElementById("step_two_adult").innerHTML = 0;
    document.getElementById("step_two_kid").innerHTML = 0;
    document.getElementById("step_two_old").innerHTML = 0;

    document.getElementById("step_three_adult").innerHTML = 0;
    document.getElementById("step_three_kid").innerHTML = 0;
    document.getElementById("step_three_old").innerHTML = 0;

    var agerange;
      if(ageOfOldestMember<=25){agerange = "0-25"}
      else if(ageOfOldestMember<=35){agerange = "26-35"}
      else if(ageOfOldestMember<=45){agerange = "36-45"}
      else if(ageOfOldestMember<=50){agerange = "46-50"}
      else if(ageOfOldestMember<=55){agerange = "51-55"}
      else if(ageOfOldestMember<=60){agerange = "56-60"}
      else if(ageOfOldestMember<=65){agerange = "61-65"}
      else if(ageOfOldestMember<=70){agerange = "66-70"}
      else if(ageOfOldestMember<=75){agerange = "71-75"}
      else if(ageOfOldestMember<=80){agerange = "76-80"}
      else {agerange = "80+"};

    let calculationArr = {
      "0-25": {
        "1A0K": "3345",
        "2A0K": "5019",
        "1A1K": "5019",
        "1A2K": "7026",
        "2A1K": "7026",
        "2A2K": "9368",
        "2A3K": "11710",
      },

      "26-35": {
        "1A0K": "3533",
        "2A0K": "5299",
        "1A1K": "5159",
        "1A2K": "7157",
        "2A1K": "7288",
        "2A2K": "9630",
        "2A3K": "11971",
      },

      "36-45": {
        "1A0K": "4794",
        "2A0K": "7192",
        "1A1K": "6105",
        "1A2K": "8041",
        "2A1K": "9054",
        "2A2K": "11396",
        "2A3K": "13739",
      },

      "46-50": {
        "1A0K": "7388",
        "2A0K": "11821",
        "1A1K": "8587",
        "1A2K": "10560",
        "2A1K": "13591",
        "2A2K": "16101",
        "2A3K": "18610",
      },

      "51-55": {
        "1A0K": "10546",
        "2A0K": "16873",
        "1A1K": "11113",
        "1A2K": "12928",
        "2A1K": "18328",
        "2A2K": "20838",
        "2A3K": "23346",
      },

      "56-60": {
        "1A0K": "14677",
        "2A0K": "23482",
        "1A1K": "14417",
        "1A2K": "16026",
        "2A1K": "24524",
        "2A2K": "27034",
        "2A3K": "29542",
      },

      "61-65": {
        "1A0K": "24385",
        "2A0K": "39016",
        "1A1K": "22184",
        "1A2K": "23307",
        "2A1K": "39086",
        "2A2K": "41595",
        "2A3K": "44105",
      },

      "66-70": {
        "1A0K": "30344",
        "2A0K": "56136",
        "1A1K": "31163",
        "1A2K": "34258",
        "2A1K": "59230",
        "2A2K": "62325",
        "2A3K": "65420",
      },

      "71-75": {
        "1A0K": "36613",
        "2A0K": "67733",
        "1A1K": "36961",
        "1A2K": "40056",
        "2A1K": "70828",
        "2A2K": "73922",
        "2A3K": "77017",
      },

      "76-80": {
        "1A0K": "46382",
        "2A0K": "85806",
        "1A1K": "45998",
        "1A2K": "49093",
        "2A1K": "88901",
        "2A2K": "91996",
        "2A3K": "95091",
      },

      ">80": {
        "1A0K": "60374",
        "2A0K": "111691",
        "1A1K": "58940",
        "1A2K": "62035",
        "2A1K": "114785",
        "2A2K": "117880",
        "2A3K": "120975",
      }
    };

    var adultValueNew = adultValue + "A";
    var kidsValueNew = kidValue + "K";

    var adultAndKids = adultValueNew+kidsValueNew;


    var finalValue = calculationArr[agerange];


    var finalResult = finalValue ? finalValue[adultAndKids] : 0;



    var premium = (finalResult == undefined ? 0 : parseFloat(finalResult / 12));

    var premium_final = premium > 0 ? premium.toFixed() : 0;

    document.getElementById("final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("step_one_final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("step_two_final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("step_three_final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);

  }
  function Calculation(e){

    var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);

    document.getElementById("step_two_adult").innerHTML = adultValue;
    document.getElementById("step_three_adult").innerHTML = adultValue;
    var kidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

    document.getElementById("step_two_kid").innerHTML = kidValue;
    document.getElementById("step_three_kid").innerHTML = kidValue;

    var ageOfOldestMember = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);

    document.getElementById("step_two_old").innerHTML = ageOfOldestMember;
    document.getElementById("step_three_old").innerHTML = ageOfOldestMember;


    var agerange;
      if(ageOfOldestMember<=25){agerange = "0-25"}
      else if(ageOfOldestMember<=35){agerange = "26-35"}
      else if(ageOfOldestMember<=45){agerange = "36-45"}
      else if(ageOfOldestMember<=50){agerange = "46-50"}
      else if(ageOfOldestMember<=55){agerange = "51-55"}
      else if(ageOfOldestMember<=60){agerange = "56-60"}
      else if(ageOfOldestMember<=65){agerange = "61-65"}
      else if(ageOfOldestMember<=70){agerange = "66-70"}
      else if(ageOfOldestMember<=75){agerange = "71-75"}
      else if(ageOfOldestMember<=80){agerange = "76-80"}
      else {agerange = "80+"};

    let calculationArr = {
      "0-25": {
        "1A0K": "3345",
        "2A0K": "5019",
        "1A1K": "5019",
        "1A2K": "7026",
        "2A1K": "7026",
        "2A2K": "9368",
        "2A3K": "11710",
      },

      "26-35": {
        "1A0K": "3533",
        "2A0K": "5299",
        "1A1K": "5159",
        "1A2K": "7157",
        "2A1K": "7288",
        "2A2K": "9630",
        "2A3K": "11971",
      },

      "36-45": {
        "1A0K": "4794",
        "2A0K": "7192",
        "1A1K": "6105",
        "1A2K": "8041",
        "2A1K": "9054",
        "2A2K": "11396",
        "2A3K": "13739",
      },

      "46-50": {
        "1A0K": "7388",
        "2A0K": "11821",
        "1A1K": "8587",
        "1A2K": "10560",
        "2A1K": "13591",
        "2A2K": "16101",
        "2A3K": "18610",
      },

      "51-55": {
        "1A0K": "10546",
        "2A0K": "16873",
        "1A1K": "11113",
        "1A2K": "12928",
        "2A1K": "18328",
        "2A2K": "20838",
        "2A3K": "23346",
      },

      "56-60": {
        "1A0K": "14677",
        "2A0K": "23482",
        "1A1K": "14417",
        "1A2K": "16026",
        "2A1K": "24524",
        "2A2K": "27034",
        "2A3K": "29542",
      },

      "61-65": {
        "1A0K": "24385",
        "2A0K": "39016",
        "1A1K": "22184",
        "1A2K": "23307",
        "2A1K": "39086",
        "2A2K": "41595",
        "2A3K": "44105",
      },

      "66-70": {
        "1A0K": "30344",
        "2A0K": "56136",
        "1A1K": "31163",
        "1A2K": "34258",
        "2A1K": "59230",
        "2A2K": "62325",
        "2A3K": "65420",
      },

      "71-75": {
        "1A0K": "36613",
        "2A0K": "67733",
        "1A1K": "36961",
        "1A2K": "40056",
        "2A1K": "70828",
        "2A2K": "73922",
        "2A3K": "77017",
      },

      "76-80": {
        "1A0K": "46382",
        "2A0K": "85806",
        "1A1K": "45998",
        "1A2K": "49093",
        "2A1K": "88901",
        "2A2K": "91996",
        "2A3K": "95091",
      },

      ">80": {
        "1A0K": "60374",
        "2A0K": "111691",
        "1A1K": "58940",
        "1A2K": "62035",
        "2A1K": "114785",
        "2A2K": "117880",
        "2A3K": "120975",
      }
    };

    var adultValueNew = adultValue + "A";
    var kidsValueNew = kidValue + "K";

    var adultAndKids = adultValueNew+kidsValueNew;

    var finalValue = calculationArr[agerange];
    var finalResult = finalValue ? finalValue[adultAndKids] : 0;

    var premium = (finalResult == undefined ? 0 : parseFloat(finalResult / 12));

    var premium_final = premium > 0 ? premium.toFixed() : 0;
    document.getElementById("final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("step_one_final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("step_two_final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
    document.getElementById("step_three_final").innerHTML = (premium_final != undefined ? parseInt(premium_final).toLocaleString() : 0);
  }


function locationHashChanged() {
    if (location.hash === "#success") {
    document.getElementById("new_call").style.display = "none";
    document.getElementsByClassName("lp-form-react")[0].style.display = "none";
    document.getElementById("poc").style.display = "block";
    document.getElementsByClassName("lp-button-react")[0].style.display = "none";

    var arrInput = document.querySelectorAll('.lp-form-react__group input'), arrRadio = [];
    for (var i = 0; i < arrInput.length; i++) {
      if(arrInput[i].placeholder == 'Email address') {
        document.getElementById("email_address").value = arrInput[i].value;
      }
    }
    document.getElementById("final_value").value = document.getElementById("final").textContent;

    }
}


window.onhashchange = locationHashChanged;
health_yes.addEventListener("change", function() {
  if (health_yes.checked) {
    yes_prcess.style.display = "block";
    no_prcess.style.display = "none";
    logic_pln_rdio.style.display = "none";
    in_tax.style.display = "none";

    document.getElementById("show_more_rdio").style.display = "none";
  }
});
health_no.addEventListener("change", function() {
  if (health_no.checked) {
    yes_prcess.style.display = "none";
    no_prcess.style.display = "none";
    personal_yes.style.display = "none";
    corporate_yes.style.display = "none";
    logic_pln_rdio.style.display = "block";
    in_tax.style.display = "none";

    document.getElementById("base_insurance_five").style.display = "block";
    document.getElementById("base_insurance_ten").style.display = "block";
    document.getElementById("basefiveplus_supertop_fourfive").style.display = "none";
    document.getElementById("supertop_fourfive").style.display = "none";
    document.getElementById("basetenplus_suptop_fourzero").style.display = "block";
    document.getElementById("suptop-fourzero").style.display = "none";
    document.getElementById("show_more_rdio").style.display = "flex";




  }
});

personal_insurance.addEventListener("change", function() {
  if (personal_insurance.checked) {
    personal_yes.style.display = "flex";
    corporate_yes.style.display = "none";
    logic_pln_rdio.style.display = "none";
    in_tax.style.display = "none";

    document.getElementById("show_more_rdio").style.display = "none";
  }
});
corporate_insurance.addEventListener("change", function() {
  if (corporate_insurance.checked) {
    personal_yes.style.display = "none";
    corporate_yes.style.display = "none";
    logic_pln_rdio.style.display = "block";
    in_tax.style.display = "none";


    document.getElementById("base_insurance_five").style.display = "none";
    document.getElementById("base_insurance_ten").style.display = "block";
    document.getElementById("basefiveplus_supertop_fourfive").style.display = "none";
    document.getElementById("supertop_fourfive").style.display = "none";
    document.getElementById("basetenplus_suptop_fourzero").style.display = "block";
    document.getElementById("suptop-fourzero").style.display = "none";
    document.getElementById("show_more_rdio").style.display = "flex";
  }
});

function oneProceed() {
  document.getElementById("step_three").style.display = "flex";
  document.getElementById("stp-heding").style.display = "block";
}


function Newcalculation(){

    document.getElementById("five_fofive_btn").style.display = "inline-block";
    document.getElementById("ten_btn").style.display = "inline-block";
    document.getElementById("five_btn").style.display = "inline-block";
    document.getElementById("ten_four").style.display = "inline-block";
    document.getElementById("fo_five").style.display = "inline-block";
    document.getElementById("fo_zero_btn").style.display = "inline-block";

    document.getElementById("pro_ced_hel_fivezero").style.display = "none";
    document.getElementById("pro_ced_hel_ten").style.display = "none";
    document.getElementById("pro_ced_hel_five").style.display = "none";
    document.getElementById("pro_ced_sub_fivezero").style.display = "none";
    document.getElementById("pro_ced_sub_forfive").style.display = "none";
    document.getElementById("pro_ced_sub_forzero").style.display = "none";

    var arrayObj = {

      "18-35": {
          "1A0C": {
              "B5L":     4998  ,
              "B10L":     6591  ,
              "S45L":       1071   ,
              "S40L":       828

          },
          "2A0C": {
              "B5L":     7144  ,
              "B10L":     9420  ,
              "S45L":       1818   ,
              "S40L":       1434

          },
          "1A1C": {

              "B5L":     6398  ,
              "B10L":     8437  ,


              "S45L":    1608   ,
              "S40L":     1267

          },
          "1A2C": {

              "B5L":     9085  ,
              "B10L":     11981  ,


              "S45L":    2272   ,
              "S40L":     1790

          },
           "1A3C": {

              "B5L":       11629   ,
              "B10L":       15335   ,


              "S45L":        2935  ,
              "S40L":       2313

          },
           "2A1C": {

              "B5L":       9827   ,
              "B10L":       12947   ,


              "S45L":         2483    ,
              "S40L":         1788

          },
           "2A2C": {

              "B5L":       12512   ,
              "B10L":       16472   ,


              "S45L":         3146    ,
              "S40L":         2266

          },
           "2A3C": {

              "B5L":       15263   ,
              "B10L":       20097  ,


              "S45L":       3809   ,
              "S40L":        2745

          },
      },

      "36-40": {
          "1A0C": {

              "B5L":     5879  ,
              "B10L":     7786  ,


              "S45L":       1392   ,
              "S40L":       1079

          },
          "2A0C": {

              "B5L":     8396  ,
              "B10L":     11118  ,


              "S45L":       2387   ,
              "S40L":       1882

          },
          "1A1C": {

              "B5L":     7525  ,
              "B10L":     9965  ,


              "S45L":     1923  ,
              "S40L":      1515

          },
          "1A2C": {

              "B5L":     10685  ,
              "B10L":     14151  ,


              "S45L":   2567 ,
              "S40L":   2023

          },
          "1A3C": {

              "B5L":       13677   ,
              "B10L":       18113   ,


              "S45L":   3211 ,
              "S40L":   2531

          },
          "2A1C": {

              "B5L":       10677   ,
              "B10L":       14116   ,


              "S45L":       3031   ,
              "S40L":       2184

          },
          "2A2C": {

              "B5L":       12959   ,
              "B10L":       17114   ,


              "S45L":     3676  ,
              "S40L":     2648

          },
          "2A3C": {

              "B5L":       15808   ,
              "B10L":       20878   ,


              "S45L":   4319 ,
              "S40L":   3110

          },
      },

      "41-45": {
          "1A0C": {

              "B5L":     8759  ,
              "B10L":     11599  ,


              "S45L":       1580   ,
              "S40L":       1222

          },
          "2A0C": {

              "B5L":     12678  ,
              "B10L":     16900  ,


              "S45L":     2708  ,
              "S40L":     2133

          },
          "1A1C": {

              "B5L":     11211  ,
              "B10L":     14848  ,


              "S45L":   2181 ,
              "S40L":   1718
          },
          "1A2C": {

              "B5L":       15921   ,
              "B10L":     21084  ,


              "S45L":   2910 ,
              "S40L":   2294

          },
          "1A3C": {

              "B5L":       20377   ,
              "B10L":       26988   ,


              "S45L":   3641 ,
              "S40L":   2870

          },
          "2A1C": {

              "B5L":       15695   ,
              "B10L":       20751   ,


              "S45L":     3437  ,
              "S40L":     2477

          },
          "2A2C": {

              "B5L":       18271   ,
              "B10L":       24301   ,


              "S45L":     4168  ,
              "S40L":     3002

          },
          "2A3C": {

              "B5L":       22290   ,
              "B10L":       29020   ,


              "S45L":   4897 ,
              "S40L":   3528

          },
      },

      "46-60": {
          "1A0C": {

              "B5L":     13421  ,
              "B10L":     17876  ,


              "S45L":     5749  ,
              "S40L":     4575

          },
          "2A0C": {

              "B5L":     20814  ,
              "B10L":     27752  ,


              "S45L":     10290  ,
              "S40L":     8107

          },
          "1A1C": {

              "B5L":     17180  ,
              "B10L":     22881  ,


              "S45L":   7176 ,
              "S40L":   5652

          },
          "1A2C": {

              "B5L":     24394  ,
              "B10L":     32491  ,


              "S45L":   9481 ,
              "S40L":   7469

          },
          "1A3C": {

              "B5L":       31225   ,
              "B10L":       41589   ,


              "S45L":   11708 ,
              "S40L":   9223

          },
          "2A1C": {

              "B5L":       24152   ,
              "B10L":       32146   ,


              "S45L":     11927  ,
              "S40L":     8987

          },
          "2A2C": {

              "B5L":       27488   ,
              "B10L":       36541   ,


              "S45L":     13578  ,
              "S40L":     10229

          },
          "2A3C": {

              "B5L":       33537   ,
              "B10L":       44580   ,


              "S45L":   15878 ,
              "S40L":   11986

          },
      },

      "61-65": {
        "1A0C": {

            "B5L":     26650  ,
            "B10L":     35668  ,


            "S45L":     8846  ,
            "S40L":     6974

        },
        "2A0C": {

            "B5L":     41917  ,
            "B10L":     56199  ,


            "S45L":     15642  ,
            "S40L":     12325

        },
        "1A1C": {

            "B5L":     34113  ,
            "B10L":     45655  ,


            "S45L":   10292 ,
            "S40L":   8109

        },
        "1A2C": {

            "B5L":     47075  ,
            "B10L":     63004  ,


            "S45L":   12598 ,
            "S40L":   9925

        },
        "1A3C": {

            "B5L":       57432   ,
            "B10L":       76864   ,


            "S45L":   14824 ,
            "S40L":   11678

        },
        "2A1C": {

            "B5L":       45253   ,
            "B10L":       60594   ,


            "S45L":     17280  ,
            "S40L":     12842

        },
        "2A2C": {

            "B5L":       48591   ,
            "B10L":       64989   ,


            "S45L":     18930  ,
            "S40L":     14086

        },
        "2A3C": {

            "B5L":       59280   ,
            "B10L":       79288   ,


            "S45L":   21231 ,
            "S40L":   15843

        },
    }

    };
      var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
      var newAdultValue = adultValue+"A";

      var kidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);
      var newKidValue = kidValue+"C";
    var ageRange = "";
    var ageOfOldestMember = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);
    var sumAsurance = (document.getElementById("sum_assur").value ? document.getElementById("sum_assur").value : 0);


if(adultValue>0 && ageOfOldestMember >0){
    document.getElementById("health_insur").style.display = "block";
}else{
    document.getElementById("health_insur").style.display = "none";
}


    if(ageOfOldestMember >= 18 && ageOfOldestMember <= 35) {
      ageRange = "18-35";
    } else if(ageOfOldestMember >= 36 && ageOfOldestMember <= 40){
      ageRange = "36-40"
    }
    else if(ageOfOldestMember >= 41 && ageOfOldestMember <= 45){
      ageRange = "41-45"
    }
    else if(ageOfOldestMember >= 46 && ageOfOldestMember <= 60){
      ageRange = "46-60"
    }
    else if(ageOfOldestMember >= 61 && ageOfOldestMember <= 65){
      ageRange = "61-65"
    }

    var moneyRange = "";

    if(sum_assur >= 0 && sum_assur <= 500000) {
      moneyRange = "0-500000";
    } else if(sum_assur >= 500000 && sum_assur <= 1000000){
      moneyRange = "500000-1000000"
    }
    else if(sum_assur >= 1000000){
      moneyRange = "1000000"
    }

    var filterObj = arrayObj[ageRange];

    if(filterObj){


      var filterObj2;
      if(kidValue == 0) {
        var newAdultKidsValue = newAdultValue+newKidValue;
        filterObj2 = filterObj[newAdultKidsValue];
      } else {
        var newAdultKidsValue = newAdultValue+newKidValue;
        filterObj2 = filterObj[newAdultKidsValue];
      }

      if(filterObj2){

          if(sumAsurance == '1-5'){
            document.getElementById("base_insurance_five").style.display = "block";
            document.getElementById("base5L").innerHTML = filterObj2.B5L;
            document.getElementById('in_tax').style.display = "none";


            document.getElementById("base_insurance_ten").style.display = "block";
            document.getElementById("base10L").innerHTML = filterObj2.S45L ;

            document.getElementById("basefiveplus_supertop_fourfive").style.display = "block";
            document.getElementById("addBase5LPlusSP45L").innerHTML = filterObj2.B5L + filterObj2.S45L;

            document.getElementById("basetenplus_suptop_fourzero").style.display = "block";
            document.getElementById("suptop-fourzero").style.display = "block";
            document.getElementById("logic_pln_rdio").style.display = "block";
            document.getElementById("supertop_fourfive").style.display = "block";


          }else if(sumAsurance == '5-9'){

            document.getElementById("supertop_fourfive").style.display = "block";
            document.getElementById("sp45L").innerHTML = filterObj2.S45L;
            document.getElementById('in_tax').style.display = "none";

            document.getElementById("base_insurance_five").style.display = "none";
            document.getElementById("base_insurance_ten").style.display = "none";
            document.getElementById("basetenplus_suptop_fourzero").style.display = "none";
            document.getElementById("suptop-fourzero").style.display = "none";
            document.getElementById("basefiveplus_supertop_fourfive").style.display = "none";
            document.getElementById("logic_pln_rdio").style.display = "block";

          }else if(sumAsurance == '10'){

            document.getElementById("suptop-fourzero").style.display = "block";
            document.getElementById("sp40L").innerHTML = filterObj2.S40L;
            document.getElementById('in_tax').style.display = "none";

            document.getElementById("supertop_fourfive").style.display = "none";
            document.getElementById("base_insurance_five").style.display = "none";
            document.getElementById("basetenplus_suptop_fourzero").style.display = "none";
            document.getElementById("basefiveplus_supertop_fourfive").style.display = "none";
            document.getElementById("base_insurance_ten").style.display = "none";
            document.getElementById("logic_pln_rdio").style.display = "block";

          }


        document.getElementById("base5L").innerHTML = filterObj2.B5L;
        document.getElementById("base10L").innerHTML = filterObj2.B10L ;
        document.getElementById("addBase5LPlusSP45L").innerHTML = filterObj2.B5L + filterObj2.S45L ;
        document.getElementById("sp45L").innerHTML = filterObj2.S45L;
        document.getElementById("b10LPlusSp40L").innerHTML = filterObj2.B10L + filterObj2.S40L;
        document.getElementById("sp40L").innerHTML = filterObj2.S40L;
      }else{
        document.getElementById("base5L").innerHTML = "0";
        document.getElementById("base10L").innerHTML = "0";
        document.getElementById("addBase5LPlusSP45L").innerHTML = "0";
        document.getElementById("sp45L").innerHTML = "0";
        document.getElementById("b10LPlusSp40L").innerHTML = "0";
        document.getElementById("sp40L").innerHTML = "0";
      }


    }else{
      document.getElementById("base5L").innerHTML = "0";
      document.getElementById("base10L").innerHTML = "0";
      document.getElementById("addBase5LPlusSP45L").innerHTML = "0";
      document.getElementById("sp45L").innerHTML = "0";
      document.getElementById("b10LPlusSp40L").innerHTML = "0";
      document.getElementById("sp40L").innerHTML = "0";
    }


}


      document.getElementById('base_insurance_five').addEventListener('click', cl_Div);

      function cl_Div() {
        document.getElementById('five_btn').style.display = "none";
        document.getElementById('pro_ced_hel_five').style.display = "flex";
        document.getElementById('in_tax').style.display = "block";
        document.getElementsByClassName('text-clr')[0].style.color = "#000";
        document.getElementsByClassName('text-clr')[1].style.color = "#000";
        document.getElementsByClassName('text-clr')[2].style.color = "#13A277";
        document.getElementsByClassName('text-clr')[3].style.color = "#000";
        document.getElementsByClassName('text-clr')[4].style.color = "#000";
        document.getElementsByClassName('text-clr')[5].style.color = "#000";


      }

      document.getElementById('base_insurance_ten').addEventListener('click', cl_Div1);

      function cl_Div1() {
        document.getElementById('ten_btn').style.display = "none";
        document.getElementById('in_tax').style.display = "block";
        document.getElementById('pro_ced_hel_ten').style.display = "flex";
        document.getElementsByClassName('text-clr')[1].style.color = "#13A277";
        document.getElementsByClassName('text-clr')[0].style.color = "#000";
        document.getElementsByClassName('text-clr')[2].style.color = "#00";
        document.getElementsByClassName('text-clr')[3].style.color = "#000";
        document.getElementsByClassName('text-clr')[4].style.color = "#000";
        document.getElementsByClassName('text-clr')[5].style.color = "#000";
      }

      document.getElementById('basefiveplus_supertop_fourfive').addEventListener('click', cl_Div2);

      function cl_Div2() {
        document.getElementById('five_fofive_btn').style.display = "none";
        document.getElementById('pro_ced_hel_fivezero').style.display = "flex";
        document.getElementById('in_tax').style.display = "block";
        document.getElementsByClassName('text-clr')[2].style.color = "#000";
        document.getElementsByClassName('text-clr')[1].style.color = "#000";
        document.getElementsByClassName('text-clr')[0].style.color = "#000";
        document.getElementsByClassName('text-clr')[3].style.color = "#13A277";
        document.getElementsByClassName('text-clr')[4].style.color = "#000";
        document.getElementsByClassName('text-clr')[5].style.color = "#000";

      }

      document.getElementById('supertop_fourfive').addEventListener('click', cl_Div3);

      function cl_Div3() {
        document.getElementById('fo_five').style.display = "none";
        document.getElementById('pro_ced_sub_forfive').style.display = "flex";
        document.getElementById('in_tax').style.display = "block";
        document.getElementsByClassName('text-clr')[3].style.color = "#000";
        document.getElementsByClassName('text-clr')[0].style.color = "#000";
        document.getElementsByClassName('text-clr')[1].style.color = "#000";
        document.getElementsByClassName('text-clr')[2].style.color = "#000";
        document.getElementsByClassName('text-clr')[4].style.color = "#13A277";
        document.getElementsByClassName('text-clr')[5].style.color = "#000";
      }

      document.getElementById('basetenplus_suptop_fourzero').addEventListener('click', cl_Div4);

      function cl_Div4() {
        document.getElementById('ten_four').style.display = "none";
        document.getElementById('pro_ced_sub_fivezero').style.display = "flex";
        document.getElementById('in_tax').style.display = "block";
        document.getElementsByClassName('text-clr')[4].style.color = "#000";
        document.getElementsByClassName('text-clr')[0].style.color = "#13A277";
        document.getElementsByClassName('text-clr')[1].style.color = "#000";
        document.getElementsByClassName('text-clr')[2].style.color = "#000";
        document.getElementsByClassName('text-clr')[3].style.color = "#000";
        document.getElementsByClassName('text-clr')[5].style.color = "#000";
      }

      document.getElementById('suptop-fourzero').addEventListener('click', cl_Div5);

      function cl_Div5() {
        document.getElementById('fo_zero_btn').style.display = "none";
        document.getElementById('pro_ced_sub_forzero').style.display = "flex";
        document.getElementById('in_tax').style.display = "block";
        document.getElementsByClassName('text-clr')[5].style.color = "#13A277";
        document.getElementsByClassName('text-clr')[0].style.color = "#000";
        document.getElementsByClassName('text-clr')[1].style.color = "#000";
        document.getElementsByClassName('text-clr')[2].style.color = "#000";
        document.getElementsByClassName('text-clr')[3].style.color = "#000";
        document.getElementsByClassName('text-clr')[4].style.color = "#000";

      }

      document.getElementById('show_more_rdio').addEventListener('click', cl_Div6);

      function cl_Div6() {
        document.getElementById("supertop_fourfive").style.display = "block";
        document.getElementById("base_insurance_five").style.display = "block";
        document.getElementById("basetenplus_suptop_fourzero").style.display = "block";
        document.getElementById("basefiveplus_supertop_fourfive").style.display = "block";
        document.getElementById("base_insurance_ten").style.display = "block";
        document.getElementById("suptop-fourzero").style.display = "block";
        document.getElementById("show_more_rdio").style.display = "none";

      }

      document.getElementById('show_more_rdio_two').addEventListener('click', cl_Div7);

      function cl_Div7() {
        document.getElementById("supertop_fourfive").style.display = "block";
        document.getElementById("base_insurance_five").style.display = "block";
        document.getElementById("basetenplus_suptop_fourzero").style.display = "block";
        document.getElementById("basefiveplus_supertop_fourfive").style.display = "block";
        document.getElementById("base_insurance_ten").style.display = "block";
        document.getElementById("suptop-fourzero").style.display = "block";
        document.getElementById("show_more_rdio_two").style.display = "none";

      }

      function ffoFive(event){

        const button = event.target;
        const buttonValue = button.value;
        const buttonValueElement = document.getElementById("five_fofive_btn");
        document.getElementById("type").value = buttonValue;

        var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
        var newAdultValue = adultValue+"A";

        var KidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

        var newKidValue = KidValue+"C";

        var parameter = newAdultValue + newKidValue;
        var newParameter;

        console.log('parameter')
        console.log(parameter);

        if (parameter =="1A0C") {
          newParameter ="Self only"
        }else if (parameter =="1A1C") {
          newParameter ="Self and 1 Child"
        }
        else if (parameter =="1A2C") {
          newParameter ="Self and 2 Children"
        }
        else if (parameter =="1A3C") {
          newParameter ="Self and 3 Children"
        }
        else if (parameter =="2A0C") {
          newParameter ="Self and Spouse"
        }
        else if (parameter =="2A1C") {
          newParameter ="Self, Spouse and 1 Child"
        }
        else if (parameter =="2A2C") {
          newParameter ="Self, Spouse and 2 Children"
        }
        else if (parameter =="2A3C") {
          newParameter ="Self, Spouse and 3 Children"
        }
        document.getElementById("coverage").value = newParameter;

        var maxValue = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);

        var scrollValue = (document.getElementById("health_yes").value ? document.getElementById("health_yes").value : 0);
      }

      function fiveBtn(event){
        const button = event.target;
        const buttonValue = button.value;
        const buttonValueElement = document.getElementById("five_btn");
        document.getElementById("type").value = buttonValue;

        var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
        var newAdultValue = adultValue+"A";


        var KidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

        var newKidValue = KidValue+"C";

        var parameter = newAdultValue + newKidValue;
        var newParameter;
        if (parameter =="1A0C") {
          newParameter ="Self only"
        }else if (parameter =="1A1C") {
          newParameter ="Self and 1 Child"
        }
        else if (parameter =="1A2C") {
          newParameter ="Self and 2 Children"
        }
        else if (parameter =="1A3C") {
          newParameter ="Self and 3 Children"
        }
        else if (parameter =="2A0C") {
          newParameter ="Self and Spouse"
        }
        else if (parameter =="2A1C") {
          newParameter ="Self, Spouse and 1 Child"
        }
        else if (parameter =="2A2C") {
          newParameter ="Self, Spouse and 2 Children"
        }
        else if (parameter =="2A3C") {
          newParameter ="Self, Spouse and 3 Children"
        }
        document.getElementById("coverage").value = newParameter;

        var maxValue = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);

      }

      function foZero(event){
        const button = event.target;
        const buttonValue = button.value;
        const buttonValueElement = document.getElementById("fo_zero_btn");
        document.getElementById("type").value = buttonValue;

        var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
        var newAdultValue = adultValue+"A";

        var KidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

        var newKidValue = KidValue+"C";

        var parameter = newAdultValue + newKidValue;
        var newParameter;
        if (parameter =="1A0C") {
          newParameter ="Self only"
        }else if (parameter =="1A1C") {
          newParameter ="Self and 1 Child"
        }
        else if (parameter =="1A2C") {
          newParameter ="Self and 2 Children"
        }
        else if (parameter =="1A3C") {
          newParameter ="Self and 3 Children"
        }
        else if (parameter =="2A0C") {
          newParameter ="Self and Spouse"
        }
        else if (parameter =="2A1C") {
          newParameter ="Self, Spouse and 1 Child"
        }
        else if (parameter =="2A2C") {
          newParameter ="Self, Spouse and 2 Children"
        }
        else if (parameter =="2A3C") {
          newParameter ="Self, Spouse and 3 Children"
        }
        document.getElementById("coverage").value = newParameter;

        var maxValue = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);

        var scrollValue = (document.getElementById("health_yes").value ? document.getElementById("health_yes").value : 0);
      }

      function tenFour(event){
        const button = event.target;
        const buttonValue = button.value;
        const buttonValueElement = document.getElementById("ten_four");
        document.getElementById("type").value = buttonValue;

        var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
        var newAdultValue = adultValue+"A";

        var KidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

        var newKidValue = KidValue+"C";

        var parameter = newAdultValue + newKidValue;
        var newParameter;

        console.log('parameter');
        console.log(parameter);

        if (parameter =="1A0C") {
          newParameter ="Self only"
        }else if (parameter =="1A1C") {
          newParameter ="Self and 1 Child"
        }
        else if (parameter =="1A2C") {
          newParameter ="Self and 2 Children"
        }
        else if (parameter =="1A3C") {
          newParameter ="Self and 3 Children"
        }
        else if (parameter =="2A0C") {
          newParameter ="Self and Spouse"
        }
        else if (parameter =="2A1C") {
          newParameter ="Self, Spouse and 1 Child"
        }
        else if (parameter =="2A2C") {
          newParameter ="Self, Spouse and 2 Children"
        }
        else if (parameter =="2A3C") {
          newParameter ="Self, Spouse and 3 Children"
        }
        document.getElementById("coverage").value = newParameter;

        var maxValue = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);

      }

      function foFive(event){
        const button = event.target;
        const buttonValue = button.value;
        const buttonValueElement = document.getElementById("fo_five");
        document.getElementById("type").value = buttonValue;

        var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
        var newAdultValue = adultValue+"A";

        var KidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

        var newKidValue = KidValue+"C";

        var parameter = newAdultValue + newKidValue;
        var newParameter;
        if (parameter =="1A0C") {
          newParameter ="Self only"
        }else if (parameter =="1A1C") {
          newParameter ="Self and 1 Child"
        }
        else if (parameter =="1A2C") {
          newParameter ="Self and 2 Children"
        }
        else if (parameter =="1A3C") {
          newParameter ="Self and 3 Children"
        }
        else if (parameter =="2A0C") {
          newParameter ="Self and Spouse"
        }
        else if (parameter =="2A1C") {
          newParameter ="Self, Spouse and 1 Child"
        }
        else if (parameter =="2A2C") {
          newParameter ="Self, Spouse and 2 Children"
        }
        else if (parameter =="2A3C") {
          newParameter ="Self, Spouse and 3 Children"
        }
        document.getElementById("coverage").value = newParameter;

        var maxValue = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);
      }

      function tenBtn(event){
        const button = event.target;
        const buttonValue = button.value;
        const buttonValueElement = document.getElementById("ten_btn");
        document.getElementById("type").value = buttonValue;

        var adultValue = (document.getElementById("adultValueDD").value ? document.getElementById("adultValueDD").value : 0);
        var newAdultValue = adultValue+"A";


        var KidValue = (document.getElementById("kidValueDD").value ? document.getElementById("kidValueDD").value : 0);

        var newKidValue = KidValue+"C";

        var parameter = newAdultValue + newKidValue;
        var newParameter;
        if (parameter =="1A0C") {
          newParameter ="Self only"
        }else if (parameter =="1A1C") {
          newParameter ="Self and 1 Child"
        }
        else if (parameter =="1A2C") {
          newParameter ="Self and 2 Children"
        }
        else if (parameter =="1A3C") {
          newParameter ="Self and 3 Children"
        }
        else if (parameter =="2A0C") {
          newParameter ="Self and Spouse"
        }
        else if (parameter =="2A1C") {
          newParameter ="Self, Spouse and 1 Child"
        }
        else if (parameter =="2A2C") {
          newParameter ="Self, Spouse and 2 Children"
        }
        else if (parameter =="2A3C") {
          newParameter ="Self, Spouse and 3 Children"
        }
        document.getElementById("coverage").value = newParameter;

        var maxValue = (document.getElementById("age-new").value ? document.getElementById("age-new").value : 0);

      }

      function urlFrm(){
        document.getElementById("url_frm").submit();
      }
</script>