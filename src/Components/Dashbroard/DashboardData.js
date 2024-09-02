import checkboxblue from '../../assets/checkboxblue.svg'
import checkboxlightblue from '../../assets/checkboxlightblue.svg'
import checkboxred from '../../assets/checkboxred.svg'
import checkboxyellow from '../../assets/checkboxyellow.svg'
import checkboxgreen from '../../assets/checkboxgreen.svg'
import checkboxgray from '../../assets/checkboxgray.svg'
export const data= [
    {
      "id": 1,
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "id": 101,
          "name": "Cloud Accounts",
          "total":"2 Total",
           "circular":1,
          
          "list1":"Connected(2)",
          "checkboxcolor1":checkboxblue,
           
          "list2":"Not connected(2)",
           "checkboxcolor2":checkboxlightblue,
           
           
           
             "unfilledcolor":"#ccddff",
             "pathcolor1":"#4d88ff",
             "value1":50
        
            
         
        },
        {
          "id": 102,
          "name": "Cloud Accounts Risk Assessment",
          "total":"9659 Total",
          "circular":1,
          
          "list1":"Failed (1689)",
          "checkboxcolor1":checkboxred,
          
          "list2":"Warining(681)",
          "checkboxcolor2":checkboxyellow,
          
          "list3":"Not Available(36)",
          "checkboxcolor3":checkboxgray,
          
          "list4":"Passed(7253)",
          "checkboxcolor4":checkboxgreen,
          
         

            "unfilledcolor":"gray",
            "pathcolor1":"green",
            "pathcolor2":"red",
             "pathcolor3":"yellow", 
            "value1":75,
            "value2":17,
            "value3":7,
            "value4":0.3
              
        }
      ]
    },
    {
      "id": 2,
      "name": "CWPP Dashboard",
      "widgets": [
        {
          "id": 201,
          "name": "Top 5 Namespace Specific Alerts",
            
          
        },
        {
            "id": 202,
          "name": "WorkLoad Alerts",
          
        }

      ]
    },
    {
      "id":3,
      "name":"Registry Scan",
       "widgets":[
        {
          "id":301,
           "name":"Image Risk Assesment",
           "total":"1470 Total Vulnerabilities"
        },
        {
          "id":302,
          "name":"Image Security Issue",
          "total":"2 Total images"
        }
       ]
    }
  ]
  