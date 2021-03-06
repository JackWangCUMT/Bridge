﻿Bridge.merge(new System.Globalization.CultureInfo("fa", true), {
    englishName: "Persian",
    nativeName: "فارسى",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "مبهم",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "منهای بی نهایت",
        positiveInfinitySymbol: "بی نهایت",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: "/",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "ريال",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: "/",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 3,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: "/",
        numberGroupSeparator: ",",
        numberNegativePattern: 3
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
        abbreviatedMonthGenitiveNames: ["ژانويه","فوريه","مارس","آوريل","مه","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""],
        abbreviatedMonthNames: ["ژانويه","فوريه","مارس","آوريل","مه","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""],
        amDesignator: "ق.ظ",
        dateSeparator: "/",
        dayNames: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
        firstDayOfWeek: 6,
        fullDateTimePattern: "dddd, dd MMMM yyyy hh:mm:ss tt",
        longDatePattern: "dddd, dd MMMM yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["ژانويه","فوريه","مارس","آوريل","مه","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""],
        monthNames: ["ژانويه","فوريه","مارس","آوريل","مه","ژوئن","ژوئيه","اوت","سپتامبر","اُكتبر","نوامبر","دسامبر",""],
        pmDesignator: "ب.ظ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["ی","د","س","چ","پ","ج","ش"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
