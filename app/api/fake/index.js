/*
 *
 * This is a fake backend implementation
 * @author @phillipeamoreira
 */

const defaultActionPayload = {
  mockedPayload: {
    foo: 'bar',
  },
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetch = (type) =>
  delay(900).then(() => {
    switch (type) {
      case 'app/Reports/FETCH_DASH' :
        return defaultActionPayload;
      default:
        return {};
    }
  });
