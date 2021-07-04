/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //livestreamingSidebar: [{ type: "autogenerated", dirName: "live-streaming" }],
  /*realtimeCommunicationSidebar: [
    { type: "autogenerated", dirName: "realtime-communication" },
  ],*/
  realtimeCommunicationSidebar: [
    {
      type: "category",
      label: "REAL TIME COMMUNICATION",
      items: ["realtime-communication/intro"],
      collapsed: false,
    },
    {
      type: "category",
      label: "GET STARTED",
      items: [
        "realtime-communication/get-started/features",
        //"realtime-communication/get-started/explore-console",
        //"realtime-communication/get-started/embeded-meeting",
        "realtime-communication/get-started/meetings-with-rest-api",
        //"realtime-communication/get-started/customise-interface-ui-components",
        "realtime-communication/get-started/integrate-mobile-tab-tv",
        //"realtime-communication/get-started/what-next",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: [
        "realtime-communication/tutorials/beginner-tutorial-js",
        "realtime-communication/tutorials/beginner-tutorial-prebuilt-javascript",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "REST API REFERENCE",
      items: [
        "realtime-communication/rest-api-reference/auth",
        "realtime-communication/rest-api-reference/create-join-meeting",
        "realtime-communication/rest-api-reference/list-all-meetings",
        "realtime-communication/rest-api-reference/get-meeting-details",
        //"realtime-communication/rest-api-reference/meeting-recording-list",
        //"realtime-communication/rest-api-reference/meeting-recording-details",
        //"realtime-communication/rest-api-reference/meeting-recording-remove",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "PREBUILT SDK JS",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/prebuilt-sdk-js/setup",
            "realtime-communication/sdk-reference/prebuilt-sdk-js/video-sdk-meeting",
          ],
        },
        {
          type: "category",
          label: "JAVASCRIPT SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/javascript-sdk/setup",
            "realtime-communication/sdk-reference/javascript-sdk/meeting-class",
            "realtime-communication/sdk-reference/javascript-sdk/participant-class",
            "realtime-communication/sdk-reference/javascript-sdk/stream-class",
          ],
        },
        {
          type: "category",
          label: "REACT SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/react-sdk/setup",
            "realtime-communication/sdk-reference/react-sdk/use-meeting",
            "realtime-communication/sdk-reference/react-sdk/use-participant",
            "realtime-communication/sdk-reference/react-sdk/meeting-provider",
            "realtime-communication/sdk-reference/react-sdk/meeting-consumer",
          ],
        },
        {
          type: "category",
          label: "REACT NATIVE SDK",
          collapsed: true,
          items: [
            "realtime-communication/sdk-reference/react-native-sdk/setup",
            "realtime-communication/sdk-reference/react-native-sdk/rtc-stream",
            "realtime-communication/sdk-reference/react-sdk/use-meeting",
            "realtime-communication/sdk-reference/react-sdk/use-participant",
            "realtime-communication/sdk-reference/react-sdk/meeting-provider",
            "realtime-communication/sdk-reference/react-sdk/meeting-consumer",
          ],
        },
        {
          type: "category",
          label: "ELECTRON SDK",
          collapsed: true,
          items: ["realtime-communication/sdk-reference/electron-sdk/setup"],
        },
      ],
    },
    {
      type: "category",
      label: "SEE ALSO",
      items: [
        //"realtime-communication/see-also/architecture",
        "realtime-communication/see-also/device-browser-support",
        //"realtime-communication/see-also/demos",
        //"realtime-communication/see-also/hippa-healthcare",
      ],
      collapsed: false,
    },
  ],
  livestreamingSidebar: [
    {
      type: "category",
      label: "LIVE STREAMING",
      items: ["live-streaming/intro"],
      collapsed: false,
    },
    {
      type: "category",
      label: "GET STARTED",
      items: [
        "live-streaming/get-started/features",
        "live-streaming/get-started/live-streaming-with-rest-api",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: ["live-streaming/tutorials/live-streaming-tutorial"],
      collapsed: false,
    },
    {
      type: "category",
      label: "API REFERENCE",
      collapsed: false,
      items: [
        "live-streaming/api-reference/auth",
        "live-streaming/api-reference/create-live-stream",
        "live-streaming/api-reference/list-live-streams",
        "live-streaming/api-reference/get-live-stream",
        "live-streaming/api-reference/update-live-stream",
        "live-streaming/api-reference/delete-live-stream",
      ],
    },
  ],
  videoondemandSidebar: [
    {
      type: "category",
      label: "VIDEO ON DEMAND",
      items: ["video-on-demand/intro"],
      collapsed: false,
    },
    {
      type: "category",
      label: "TUTORIALS",
      items: ["video-on-demand/tutorials/stream-video-files-tutorial"],
      collapsed: false,
    },
    {
      type: "category",
      label: "STORAGE/STREAMING API REFERENCE",
      items: [
        "video-on-demand/storage-api-reference/auth",
        "video-on-demand/storage-api-reference/create-new-url",
        "video-on-demand/storage-api-reference/upload-file",
        "video-on-demand/storage-api-reference/list-all-files",
        "video-on-demand/storage-api-reference/get-file-details",
        "video-on-demand/storage-api-reference/delete-file",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "ENCODING API REFERENCE",
      items: [
        "video-on-demand/encoding-api-reference/auth",
        "video-on-demand/encoding-api-reference/create-encoding-job",
        "video-on-demand/encoding-api-reference/list-all-encoding-jobs",
        "video-on-demand/encoding-api-reference/get-encoding-job-details",
        "video-on-demand/encoding-api-reference/delete-encoding-job",
      ],
      collapsed: false,
    },
  ],
};
