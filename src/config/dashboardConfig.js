const DashboardConfig = {
  "dashboard_days": 7,
  "hours_per_day": 24,
  "step_of_hours_per_day": 3,
  "icons":[
    {
      "condition": hour => hour % 1 === 0,
      "icon": "heart",
      "color": "red"
    },
    {
      "condition": hour => hour % 2 === 0,
      "icon": "frown",
      "color": "purple"
    },
    {
      "condition": hour => hour % 3 === 0,
      "icon": "hospital",
      "color": "blue"
    },
    {
      "condition": hour => hour % 4 === 0,
      "icon": "woman",
      "color": "teal"
    },
  ]
}

export default DashboardConfig;
