import { Linking } from 'react-native';

export const config = {
  screens: {
    Main: {
      screens: {
        [MAIN_ROUTES.home]: '',
        [MAIN_ROUTES.testBottomSheet]: {
          path: MAIN_ROUTES.testBottomSheet,
          parse: {
            id: (id: string) => `${id}`,
          },
        },
        [MAIN_ROUTES.testReanimation]: MAIN_ROUTES.testReanimation,
        [MAIN_ROUTES.testL10n]: MAIN_ROUTES.testL10n,
      },
    },
    Prematch: {
      screens: {
        [PREMATCH_ROUTES.main]: PREMATCH_ROUTES.main,
        [PREMATCH_ROUTES.prematchEvents]: {
          path: PREMATCH_ROUTES.prematchEvents,
          parse: {
            sportId: (sportId: string) => `${sportId}`,
            categoryId: (categoryId: string) => `${categoryId}`,
            tournamentId: (tournamentId: string) => `${tournamentId}`,
          },
        },
      },
    },
    Live: {
      screens: {
        [LIVE_ROUTES.main]: LIVE_ROUTES.main,
      },
    },
    Betslip: {
      screens: {
        [BETSLIP_ROUTES.main]: BETSLIP_ROUTES.main,
      },
    },
    Profile: 'user',
    NotFound: '*',
  },
};

export const linking = {
  prefixes: ['https://testtestxxxx.com', 'azurbetting://'],

  /**
   * Picked from https://reactnavigation.org/docs/deep-linking/
   * for deep linking third-party example
   */
  async getInitialURL() {
    // First, you may want to do the default deep link handling
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Integrated api
    // const params = branch.getFirstReferringParams();
    // return params?.$canonical_url;
  },

  // Custom function to subscribe to incoming links
  subscribe(listener: (url: string) => void) {
    // First, you may want to do the default deep link handling
    const onReceiveURL = ({ url }: { url: string }) => listener(url);

    // Listen to incoming links from deep linking
    Linking.addEventListener('url', onReceiveURL);

    // Next, you would need to subscribe to incoming links from your third-party integration
    // For example, to get to subscribe to incoming links from branch.io:
    // branch.subscribe(({ error, params, uri }) => {
    //   if (error) {
    //     console.error('Error from Branch: ' + error);
    //     return;
    //   }

    //   if (params['+non_branch_link']) {
    //     const nonBranchUrl = params['+non_branch_link'];
    //     // Route non-Branch URL if appropriate.
    //     return;
    //   }

    //   if (!params['+clicked_branch_link']) {
    //     // Indicates initialization success and some other conditions.
    //     // No link was opened.
    //     return;
    //   }

    //   // A Branch link was opened
    //   const url = params.$canonical_url;

    //   listener(url);
    // });

    return () => {
      // Clean up the event listeners
      Linking.removeEventListener('url', onReceiveURL);
      // branch.unsubscribe();
    };
  },

  config,
};
