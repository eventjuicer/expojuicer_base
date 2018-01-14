export default {
  auth: {
    unauthorized: 'Unauthorized',

    checkEmail: 'Check e-mail for further instructions',

    fields: {
      email: 'Your business e-mail address',
      password: 'Password'
    },

    loginByPassword: {
      hint: 'loginByPassword hint'
    },

    loginByRequest: {
      hint: 'loginByRequest hint'
    },

    actions: {
      loginWithPassword: 'Sign In',
      requestAccess: 'Request an access'
    }
  },

  fields: {
    skip: "Skip, don't import",
    fname: 'First name',
    lname: 'Last name',
    cname2: 'Company name',
    email: 'E-mail address'
  },

  invites: {
    pagetitle: 'Send an invite to your contact lists',

    import_manually: 'Paste or enter manually',
    import_csv: 'Upload CSV file',

    errors: {
      no_email_assigned: 'Select email',
      mappings_overlap: 'Check mappings'
    }
  },

  pos: {
    logout : "Logout",
    ranking: 'Ranking',
    sros: 'test',
    search: 'Search',
    configuration: 'Configuration',
    language: 'Language',
    theme: {
      name: 'Theme',
      light: 'Light',
      dark: 'Dark'
    },

    sections: {
      suggest_a_meeting: 'Suggest a meeting'
    },

    dashboard: {
      order: {
        items:
          'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items'
      },
      welcome: {
        title: 'Welcome to expojuicer.com!',
        subtitle:
          'This is the admin panel for all your promotional and logistics needs as an exhibitor.',
        aor_button: 'Link',
        demo_button: 'Link #2'
      }
    }
  },

  resources: {
    scans: {
      name: 'Scans',
      noresults : "This feature is not yet enabled for your company.",
      noresultsmore : "However...",
    },

    creatives: {
      name: 'Social media',

    },

    newsletters: {
      name: 'Newsletter templates',


      fields: {
        name: 'Internal name of newsletter',
        data: {
          sender_name: 'Sender name'
        },
        sender_email: 'Sender e-mail address',
        template: 'Custom message'
      }
    },

    meetups: {
      name: 'RSVPs',

      fields: {
        message: 'Type your message',
        creative_id: 'Choose your template'
      },

      tabs: {
        form: 'Create new meeting request',
        help: 'Need help? '
      }
    },

    campaigns: {

      name: 'Sent newsletters',

      noresults : "This feature is not yet enabled for your company.",
      noresultsmore : "However...",


      tabs: {
        import_manually: 'Import manually',
        import_csv: 'Upload CSV file'
      }
    },

    imports: {
      name: 'Imported contacts',
    },


    contacts: {
      name: 'Contacts',
    },


    visitors: {
      name: 'Browse participants',

      tabs: {
        invitation: 'Send invitation',
        subject: 'Subject',
        message: 'Message'
      },

      actions: {
        invite: 'Send invitation'
      },

      fields: {
        creative: 'Select newsletter'
      }
    },

    'participants-by-code': {
      name: 'Participants'
    },

    customers: {
      name: 'Customer |||| Customers',
      fields: {
        commands: 'Orders',
        groups: 'Segments',
        last_seen_gte: 'Visited Since',
        name: 'Name'
      },
      tabs: {
        identity: 'Identity',
        address: 'Address',
        orders: 'Orders',
        reviews: 'Reviews',
        stats: 'Stats'
      },
      page: {
        delete: 'Delete Customer'
      }
    },
    commands: {
      name: 'Order |||| Orders',
      fields: {
        basket: {
          delivery: 'Delivery',
          reference: 'Reference',
          quantity: 'Quantity',
          sum: 'Sum',
          tax_rate: 'Tax Rate',
          total: 'Total',
          unit_price: 'Unit Price'
        },
        customer_id: 'Customer',
        date_gte: 'Passed Since',
        date_lte: 'Passed Before',
        total_gte: 'Min amount'
      }
    },
    products: {
      name: 'Poster |||| Posters',
      fields: {
        category_id: 'Category',
        height_gte: 'Min height',
        height_lte: 'Max height',
        height: 'Height',
        image: 'Image',
        price: 'Price',
        reference: 'Reference',
        stock_lte: 'Low Stock',
        stock: 'Stock',
        thumbnail: 'Thumbnail',
        width_gte: 'Min width',
        width_lte: 'mx_width',
        width: 'Width'
      },
      tabs: {
        image: 'Image',
        details: 'Details',
        description: 'Description',
        reviews: 'Reviews'
      }
    },
    categories: {
      name: 'Category |||| Categories',
      fields: {
        products: 'Products'
      }
    },
    reviews: {
      name: 'Review |||| Reviews',
      fields: {
        customer_id: 'Customer',
        command_id: 'Order',
        product_id: 'Product',
        date_gte: 'Posted since',
        date_lte: 'Posted before',
        date: 'Date',
        comment: 'Comment',
        rating: 'Rating'
      },
      action: {
        accept: 'Accept',
        reject: 'Reject'
      },
      notification: {
        approved_success: 'Review approved',
        approved_error: 'Error: Review not approved',
        rejected_success: 'Review rejected',
        rejected_error: 'Error: Review not rejected'
      }
    },
    segments: {
      name: 'Segments',
      fields: {
        customers: 'Customers',
        name: 'Name'
      },
      data: {
        compulsive: 'Compulsive',
        collector: 'Collector',
        ordered_once: 'Ordered once',
        regular: 'Regular',
        returns: 'Returns',
        reviewer: 'Reviewer'
      }
    }
  }
};
