const modalConfigurations = [
  {
    id: "editPersonalInfoModal",
    title: "Edit Personal Information",
    header: "Personal Information",
    fields: [
      {
        type: "select",
        id: "gender",
        name: "gender",
        label: "Gender",
        tooltip: "Select your gender",
        required: true,
        options: [
          { text: "Male", value: "Male" },
          { text: "Female", value: "Female" },
        ],
      },
      {
        type: "input",
        id: "birthDate",
        name: "birthDate",
        label: "Birth Date",
        tooltip: "Enter your birth date",
        required: true,
        inputType: "date",
      },
      {
        type: "input",
        id: "phone",
        name: "phone",
        label: "Phone",
        tooltip: "Enter your phone",
        required: true,
        inputType: "phone",
      },
      {
        type: "input",
        id: "emailAddress",
        name: "emailAddress",
        label: "Email Address",
        tooltip: "Enter your email address",
        required: true,
        inputType: "mail",
      },
      {
        type: "input",
        id: "webPage",
        name: "webPage",
        label: "Web Page",
        tooltip: "Enter your web page",
        required: false,
        inputType: "text",
      },
      {
        type: "input",
        id: "country",
        name: "country",
        label: "Country",
        tooltip: "Enter your Country",
        required: true,
        inputType: "text",
      },
    ],
  },
  {
    id: "addSkillModal",
    title: "Add Skill",
    header: "Add Skill",
    fields: [
      {
        type: "input",
        id: "skill",
        name: "skill",
        label: "Skill",
        tooltip: "Enter your skill",
        required: true,
        inputType: "text",
      },
    ],
  },
];

export { modalConfigurations };