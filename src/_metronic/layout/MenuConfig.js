export default {
  header: {
    self: {},
    items: [
      {
        title: "Dashboards",
        root: true,
        alignment: "left",
        page: "dashboard",
        translate: "MENU.DASHBOARD"
      },
      // {
      //   title: "Components",
      //   root: true,
      //   alignment: "left",
      //   toggle: "click",
      //   submenu: [
      //     {
      //       title: "React Bootstrap",
      //       bullet: "dot",
      //       icon: "flaticon-web",
      //       submenu: [
      //
      //
      //       ]
      //     }
      //   ]
      // },
      {
        title: "Custom",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Layout Builder",
            icon: "flaticon2-expand",
            page: "builder"
          },
          {
            title: "Error Pages",
            bullet: "dot",
            icon: "flaticon2-warning",
            submenu: [
              {
                title: "Error 1",
                page: "error/error-v1"
              },
              {
                title: "Error 2",
                page: "error/error-v2"
              },
              {
                title: "Error 3",
                page: "error/error-v3"
              },
              {
                title: "Error 4",
                page: "error/error-v4"
              },
              {
                title: "Error 5",
                page: "error/error-v5"
              },
              {
                title: "Error 6",
                page: "error/error-v6"
              }
            ]
          }
        ]
      }
    ]
  },
  aside: {
    self: {},
    items: [
      {
        title: "Upload parts",
        root: true,
        icon: "flaticon-cogwheel-2",
        page: "configurator",
        translate: "MENU.UPLOADPARTS",
        bullet: "dot"
      },
      {
        title: "Quotes",
        root: true,
        icon: "flaticon-file-2",
        page: "quotes",
        translate: "MENU.QUOTES",
        bullet: "dot"
      },
      {
        title: "Orders",
        root: true,
        icon: "flaticon2-open-box",
        page: "orders",
        translate: "MENU.ORDERS",
        bullet: "dot"
      },
      // {
      //   title: "Checkout",
      //   root: true,
      //   icon: "flaticon2-order",
      //   page: "checkout",
      //   translate: "MENU.CHECKOUT",
      //   bullet: "dot"
      // },
      {
        title: "Terms and conditions",
        root: true,
        icon: "flaticon2-terms",
        page: "pages",
        translate: "MENU.PAGES",
        bullet: "dot"
      },
    ]
  }
};
