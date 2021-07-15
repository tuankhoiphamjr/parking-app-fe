const moment = require("moment");

const dateDBFormat = (date) => {
      return moment(date).format("DD/MM/YYYY");
};


const dateTimeFormat = {
  dateDBFormat
};

module.exports = dateTimeFormat;
