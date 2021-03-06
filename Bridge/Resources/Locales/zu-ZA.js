﻿Bridge.merge(new System.Globalization.CultureInfo("zu-ZA", true), {
    englishName: "isiZulu (South Africa)",
    nativeName: "isiZulu (iNingizimu Afrika)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 2,
        percentNegativePattern: 2,
        currencySymbol: "R",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 2,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Son.","Mso.","Bi.","Tha.","Ne.","Hla.","Mgq."],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mas","Eph","Mey","Jun","Jul","Agas","Sep","Okt","Nov","Dis",""],
        abbreviatedMonthNames: ["Jan","Feb","Mas","Eph","Mey","Jun","Jul","Agas","Sep","Okt","Nov","Dis",""],
        amDesignator: "Ntambama",
        dateSeparator: "-",
        dayNames: ["iSonto","uMsombuluko","uLwesibili","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dd MMMM yyyy hh:mm:ss tt",
        longDatePattern: "dd MMMM yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["Januwari","Febhuwari","Mashi","Ephreli","Meyi","Juni","Julayi","Agasti","Septemba","Okthoba","Novemba","Disemba",""],
        monthNames: ["Januwari","Febhuwari","Mashi","Ephreli","Meyi","Juni","Julayi","Agasti","Septemba","Okthoba","Novemba","Disemba",""],
        pmDesignator: "Ekuseni",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd-MM-yyyy",
        shortestDayNames: ["So","Ms","Bi","Th","Ne","Hl","Mg"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
