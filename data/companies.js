export default [
  {
    name: 'Company A',
    requirements: [
      ['apartment', 'house', 'or'],
      ['property_insurance', 'none'],
      'and',
    ],
  },
  {
    name: 'Company B',
    requirements: [
      ['5_door_car', '4_door_car', 'or'],
      ['drivers_license', 'car_insurance', 'and'],
      'and',
    ],
  },
  {
    name: 'Company C',
    requirements: [['social_security_number', 'work_permit', 'and'], 'none'],
  },
  {
    name: 'Company D',
    requirements: [['apartment', 'flat', 'house', 'or'], 'none'],
  },
  {
    name: 'Company E',
    requirements: [
      ['drivers_license', 'none'],
      ['2_door_car', '3_door_car', '4_door_car', '5_door_car', 'or'],
      'and',
    ],
  },
  {
    name: 'Company F',
    requirements: [
      ['scooter', 'bike', 'or'],
      ['motorcycle', 'drivers_license', 'motorcycle_insurance', 'and'],
      'or',
    ],
  },
  // {
  //   name: 'Company F',
  //   requirements: [
  //     ['scooter', 'bike', 'motorcycle', 'or'],
  //     ['drivers_license', 'motorcycle_insurance', 'and'],
  //     'and',
  //   ],
  // },
  {
    name: 'Company G',
    requirements: [
      ['massage_qualification_certificate', 'liability_insurance', 'and'],
      'none',
    ],
  },
  {
    name: 'Company H',
    requirements: [['storage_place', 'garage', 'or'], 'none'],
  },
  {
    name: 'Company J',
    requirements: [[], 'none'], //no condition hence empty array
  },
  {
    name: 'Company K',
    requirements: [['paypal_account'], 'none'],
  },
];
