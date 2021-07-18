const moment = require("moment");

const dateDBFormat = (date) => {
      return moment(date).format("DD/MM/YYYY");
};

const yearMonthFormat = (date) => {
      return moment(date).format("MM/YYYY");
};

const dateTimeFormat = {
      dateDBFormat,
      yearMonthFormat,
};

module.exports = dateTimeFormat;
