
export default class Reservation {

  private dialog: boolean = false;

  private steps: any = [
    {//custom
      title: "custom",
      required: "barberId"
    },
    {//custom
      title: "custom",
      required: "workId"      
    },
    {//automatic
      title: "Indique la fecha y la hora en la que quiere reservar",
      required: "startHour",
      fields: [
        {
          is: "date",
          name: "startDate",
          label: "fecha de inicio",
          hint: "EVENT.hintDate",
          icon: "event",
          date: new Date().toISOString().substr(0, 10),
          modal: [],
          required: true
        },
        {
          is: "hour",
          name: "startHour",
          label: "horarios",
          hint: "EVENT.hintDate",
          icon: "event",
          required: true
        }
      ]
    }
  ];
}
