export const genderArray = [
  {value:'m', name: 'Male'},
  {value:'f', name: 'Female'}
]

export const smokerArray = [
  {value:'true', name: 'True'},
  {value:'false', name: 'False'}
]

let rateClassArray = [
  {
    value: 'pp',
    name: 'Preferred Plus'
  },{
    value: 'p',
    name: 'Preferred'
  },{
    value: 'sp',
    name: 'Standard Plus'
  },{
    value: 's',
    name: 'Standard'
  }
]
for (var i=1; i<13; i++) {
  rateClassArray.push({
    name: `Table ${i}`,
    value: `t${i}`
  })
}

export const termsArray = [
  {
    value: '10',
    name: '10 Year Term'
  },
  {
    value: '15',
    name: '15 Year Term'
  },
  {
    value: '20',
    name: '20 Year Term'
  },
  {
    value: '25',
    name: '25 Year Term'
  },
  {
    value: '30',
    name: '30 Year Term'
  },
  {
    value: '15rop',
    name: '15 Year Return of Premium'
  },
  {
    value: '20rop',
    name: '20 Year Return of Premium'
  },
  {
    value: '25rop',
    name: '25 Year Return of Premium'
  },
  {
    value: '30rop',
    name: '30 Year Return of Premium'
  },
  {
    value: '90ul',
    name: 'Universal Life Age 90'
  },
  {
    value: '95ul',
    name: 'Universal Life Age 95'
  },
  {
    value: '100ul',
    name: 'Universal Life Age 100'
  },
  {
    value: '105ul',
    name: 'Universal Life Age 105'
  },
  {
    value: '110ul',
    name: 'Universal Life Age 110'
  },
  {
    value: '121ul',
    name: 'Universal Life Age 121'
  }
]

export const statesArray = [
    {
        "name": "Alabama",
        "value": "AL"
    },
    {
        "name": "Alaska",
        "value": "AK"
    },
    {
        "name": "Arizona",
        "value": "AZ"
    },
    {
        "name": "Arkansas",
        "value": "AR"
    },
    {
        "name": "California",
        "value": "CA"
    },
    {
        "name": "Colorado",
        "value": "CO"
    },
    {
        "name": "Connecticut",
        "value": "CT"
    },
    {
        "name": "Delaware",
        "value": "DE"
    },
    {
        "name": "District Of Columbia",
        "value": "DC"
    },
    {
        "name": "Florida",
        "value": "FL"
    },
    {
        "name": "Georgia",
        "value": "GA"
    },
    {
        "name": "Hawaii",
        "value": "HI"
    },
    {
        "name": "Idaho",
        "value": "ID"
    },
    {
        "name": "Illinois",
        "value": "IL"
    },
    {
        "name": "Indiana",
        "value": "IN"
    },
    {
        "name": "Iowa",
        "value": "IA"
    },
    {
        "name": "Kansas",
        "value": "KS"
    },
    {
        "name": "Kentucky",
        "value": "KY"
    },
    {
        "name": "Louisiana",
        "value": "LA"
    },
    {
        "name": "Maine",
        "value": "ME"
    },
    {
        "name": "Maryland",
        "value": "MD"
    },
    {
        "name": "Massachusetts",
        "value": "MA"
    },
    {
        "name": "Michigan",
        "value": "MI"
    },
    {
        "name": "Minnesota",
        "value": "MN"
    },
    {
        "name": "Mississippi",
        "value": "MS"
    },
    {
        "name": "Missouri",
        "value": "MO"
    },
    {
        "name": "Montana",
        "value": "MT"
    },
    {
        "name": "Nebraska",
        "value": "NE"
    },
    {
        "name": "Nevada",
        "value": "NV"
    },
    {
        "name": "New Hampshire",
        "value": "NH"
    },
    {
        "name": "New Jersey",
        "value": "NJ"
    },
    {
        "name": "New Mexico",
        "value": "NM"
    },
    {
        "name": "New York",
        "value": "NY"
    },
    {
        "name": "North Carolina",
        "value": "NC"
    },
    {
        "name": "North Dakota",
        "value": "ND"
    },
    {
        "name": "Ohio",
        "value": "OH"
    },
    {
        "name": "Oklahoma",
        "value": "OK"
    },
    {
        "name": "Oregon",
        "value": "OR"
    },
    {
        "name": "Pennsylvania",
        "value": "PA"
    },
    {
        "name": "Rhode Island",
        "value": "RI"
    },
    {
        "name": "South Carolina",
        "value": "SC"
    },
    {
        "name": "South Dakota",
        "value": "SD"
    },
    {
        "name": "Tennessee",
        "value": "TN"
    },
    {
        "name": "Texas",
        "value": "TX"
    },
    {
        "name": "Utah",
        "value": "UT"
    },
    {
        "name": "Vermont",
        "value": "VT"
    },
    {
        "name": "Virginia",
        "value": "VA"
    },
    {
        "name": "Washington",
        "value": "WA"
    },
    {
        "name": "West Virginia",
        "value": "WV"
    },
    {
        "name": "Wisconsin",
        "value": "WI"
    },
    {
        "name": "Wyoming",
        "value": "WY"
    }
]

export default {
  states: statesArray,
  rateClasses: rateClassArray,
  terms: termsArray,
  gender: genderArray,
  smoker: smokerArray
}
