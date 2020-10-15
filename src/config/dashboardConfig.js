const DashboardConfig = {
  dashboard_days: 7,
  hours_per_day: 24,
  step_of_hours_per_day: 3,
  icons: [
    {
      condition: (annotation_dict) => annotation_dict && "person" in annotation_dict,
      label: 'person',
      icon: "heart",
      color: "red",
    },
    {
      condition: (annotation_dict) => annotation_dict && "xxx" in annotation_dict,
      label: 'birth',
      icon: "frown",
      color: "purple",
    },
    {
      condition: (annotation_dict) => annotation_dict && "xxx" in annotation_dict,
      label: "horny",
      icon: "hospital",
      color: "blue",
    },
    {
      condition: (annotation_dict) => annotation_dict && "xxx" in annotation_dict,
      label: "very  horny",
      icon: "woman",
      color: "teal",
    },
  ],
};

export default DashboardConfig;
