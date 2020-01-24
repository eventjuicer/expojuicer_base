const languages = {
    "en": {
        "aor": {
            "action": {
                "delete": "Delete",
                "show": "Show",
                "list": "List",
                "save": "Save",
                "create": "Create",
                "edit": "Edit",
                "cancel": "Cancel",
                "refresh": "Refresh",
                "preview": "Preview",
                "add_filter": "Add filter",
                "remove_filter": "Delete filter",
                "back": "Back",
                "close": "Close",
                "export": "Export"
            },
            "boolean": {
                "true": "Yes",
                "false": "No"
            },
            "page": {
                "list": "%{name}",
                "edit": "%{name} #%{id}",
                "show": "%{name} #%{id}",
                "create": "Create %{name}",
                "delete": "Delete %{name} #%{id}",
                "dashboard": "Dashboard",
                "not_found": "Page not found",
                "meeting_request": "Send meeting request",
                "participant_id": "Participant"
            },
            "input": {
                "image": {
                    "upload_several": "",
                    "upload_single": ""
                }
            },
            "message": {
                "yes": "Yes",
                "no": "No",
                "are_you_sure": "Are you sure?",
                "about": "About",
                "not_found": "Page not found"
            },
            "navigation": {
                "no_results": "Not found",
                "page_out_of_boundaries": "Strona %{page} jest poza limitem",
                "page_out_from_end": "Nie można wyjść poza ostatnią stronę",
                "page_out_from_begin": "Nie można wyjść poza pierwszą stronę",
                "page_range_info": "%{offsetBegin}-%{offsetEnd} of %{total}",
                "next": "Next",
                "prev": "Prev"
            },
            "auth": {
                "username": "Username",
                "password": "Password",
                "sign_in": "Sign In",
                "sign_in_error": "Authorization failed, please try again",
                "logout": "Logout"
            },
            "notification": {
                "updated": "Updated successfully",
                "created": "Created successfully",
                "deleted": "Removed successfully",
                "item_doesnt_exist": "The element does not exist",
                "http_error": "There was a connection error with the server"
            },
            "validation": {
                "required": "Required",
                "minLength": "Must be at least %{min} signs",
                "maxLength": "Must be %{max} or less",
                "minValue": "Minimum %{min}",
                "maxValue": "Maksimum %{max}",
                "number": "Must be a number",
                "email": "Must be a valid email address",
                "name": "Name must be more descriptive"
            }
        },
        "pos": {
            "logout": "Logout",
            "ranking": "Ranking",
            "sros": "test",
            "search": "Search",
            "configuration": "Language",
            "language": "Language",
            "theme": {
                "name": "Theme",
                "light": "Light",
                "dark": "Dark"
            },
            "sections": {
                "suggest_a_meeting": ""
            },
            "support": {
                "title": "Technical support",
                "description": "Need assistance? Some features are not so self-explanatory? Shoot me an email or give me a call. "
            }
        },
        "common": {
            "sales": {
                "starts": "sales starts",
                "ends": "sales ends",
                "net": "net",
                "gross": "net",
                "remaining": "Remaining",
                "pcs": "pcs",
                "bookable": "remaining"
            },
            "actions": {
                "buy": "Buy now!",
                "modify": "Cancel",
                "quantity": "Quantity"
            },
            "statuses": {
                "unavailable": "Unavailable",
                "already_bought": "Already bought",
                "success": "Success!",
                "cancelled": "Cancelled",
                "ok": "Finalized",
                "new": "Processing",
                "confirmed": "Confirmed",
                "hold": "Waiting for payment"
            },
            "langs": {
                "pl": "polski",
                "en": "english",
                "de": "deutsch"
            },
            "thankyou": "Thank you for your order"
        },
        "menu": {
            "sections": {
                "promote": "Promote your participation",
                "suggest_a_meeting": "Booth Meeting Invitation ",
                "crucial": "Exhibitor's profile",
                "leads": "Your leads",
                "settings": "Settings"
            }
        },
        "actions": {
            "copied": "Copied to clipboard",
            "share_linkedin": "Share on Linkedin",
            "share_twitter": "Share on Twitter",
            "share_facebook": "Share on Facebook"
        },
        "auth": {
            "errors": {
                "badtoken": "Bad token!"
            },
            "unauthorized": "Unauthorized",
            "support": "Please contact with sales support if you cannot access this application.",
            "checkEmail": "Check e-mail for further instructions",
            "fields": {
                "email": "Your business e-mail address",
                "password": "Password"
            },
            "loginByPassword": {
                "hint": "loginByPassword hint"
            },
            "loginByRequest": {
                "hint": "loginByRequest hint"
            },
            "actions": {
                "loginWithPassword": "Sign In",
                "requestAccess": "Request an access"
            }
        },
        "prizes": {
            "name": "Ranking & Rewards",
            "must_be_winner": "You must be #1",
            "position_2": "Only for position #",
            "position_1": "Your position must be between #",
            "and": " and #",
            "points": " points.",
            "place": "Your current position: ",
            "unknown": "#unknown",
            "presentation": {
                "title": "Presentation slot",
                "description": "A 30-minute presentation slot on one of the three main stages. Your presentation slot will take place at 3:50 PM, and will be added to the official E-Commerce Berlin Expo 2020 agenda.",
                "image": ""
            },
            "video_interview": {
                "title": "Video Interview",
                "description": "A video interview will be conducted with one of your company representatives at the expo. The video interview will be published on the EBE Youtube channel and the social media channels (Facebook, Twitter, LinkedIn).",
                "image": ""
            },
            "brand_highlight": {
                "title": "Logo Highlight",
                "description": "Your logotype will be displayed in a prime location on the official E-commerce Berlin Expo website among leading e-commerce companies.",
                "image": ""
            },
            "leaflets": {
                "title": "Permission of Distribution of flyers",
                "description": "Distribution of flyer at the venue by a hostess (*) Costs of production, hostess hire and delivery are borne by the sponsor.",
                "image": ""
            },
            "earlybird": {
                "title": "Access to Early-Bird Sales",
                "description": "Receive access to early-bird prices for the exhibition spaces at the next E-commerce Berlin Expo in February 2021. You will be able to see the entire floor plan to choose the best location for your booth, before anyone else ! "
            },
            "meetups": {
                "title": "Mega Package of Invitations",
                "description": "Every 50 scored points grant you a package of 50 invitations in our matchmaking tool.\nNot enough? Keep scoring points!\nIf you score another 50 points, you will get an extra package of 50 invitations. You can add it up to 200 records (for 200 points), which is a limit per company.\nWith this matchmaking tool, you will be able to send messages to the visitors who signed up for the E-commerce Berlin Expo 2020. Set up meetings with your leads and make the most of the Expo!\n\n> *The maximum limit of invitations per company: 200 records. ",
                "image": ""
            },
            "scanner": {
                "title": "Badge scanner mobile app",
                "description": "You will get an access to dedicated visitor badge scanner app. Each booth representative of your company would be able to gather visitor data and export results to .xls or .csv.",
                "image": ""
            },
            "rollups": {
                "title": "Roll-up next to the entrance \n",
                "description": "Your company's logotype will be displayed at the immediate entrance to the exhibition hall.",
                "image": ""
            },
            "blog": {
                "title": "A guest article on the E-commerce Berlin Expo Blog",
                "description": "One-time inclusion of your company content on https://ecommercegermany.com/. The article will be promoted 1x in the newsletter and 1x on the social media channels (Facebook, Linked, Twitter) of the E-commerce Berlin Expo.",
                "image": ""
            },
            "badges": {
                "title": "Logotype on the visitors badge",
                "description": "Exclusive branded visitor badges with the Winner's logo. The badges will be handed out to all of the visitors (7000+) during the E-commerce Berlin Expo 2020."
            }
        },
        "fields": {
            "skip": "Skip, don't import",
            "fname": "First name",
            "lname": "Last name",
            "cname2": "Company name",
            "email": "E-mail address",
            "phone": "Phone number"
        },
        "invites": {
            "pagetitle": "Send an invite to your contact lists",
            "import_manually": "Paste or enter manually",
            "import_csv": "Upload CSV file",
            "errors": {
                "no_email_assigned": "Select email",
                "mappings_overlap": "Check mappings"
            }
        },
        "dashboard": {
            "tutorial": "Check out our tutorial about using promo materials!",
            "welcome": {
                "title": "Welcome to Exhibitor's Panel!",
                "subtitle": " ",
                "description": "This is the administration panel for exhibitors which allows you to promote your presence at the E-commerce Berlin Expo 2020. The options provided here will help you schedule meetings with registered attendees, invite your clients and get additional promotional services at the event.",
                "aor_button": "Link",
                "demo_button": "Link #2"
            }
        },
        "informer": {
            "title": "Logistics information",
            "tabs": {
                "basic": "Basic information",
                "shipment": "Shipping of materials",
                "assembly": "Assembly/disassembly"
            },
            "basic": {
                "exhibition_space": "Exhibition space",
                "area": "Area:",
                "stand_options": {
                    "standard": "3m x 3m (Start-up, Standard, Hot, Super-Hot)",
                    "grand": "6m x 3m (Grand)"
                },
                "equipment": "If you have not ordered additional equipment to your booth, there will be:",
                "equipment_options": {
                    "hocker": "4 hockers",
                    "table": "2 table",
                    "voucher": "4 lunch vouchers",
                    "wifi": "WiFi password",
                    "electricity": "electric socket (300 W)"
                },
                "backwall": "The maximum dimensions of the back wall are 3 m wide x 3 m high (for the 9sqm exhibition space), 6 m x 3 m (for 18sqm exhibition space)",
                "add_equipment": "Additional equipment",
                "carpeting": "If you want a carpeting in your stand in any color of your choice - contact us at: ",
                "add_eq_contact": "Do you need additional furniture, vouchers, electricity or you want to rent a TV screen? Talk to us!",
                "see": "See visualization",
                "construction": " prepared by All in Event. You can order it by 6 April at: ",
                "representative": "Company representatives",
                "reps_info": "The number of participants on your booth is unlimited. Remember to enter their data in "
            },
            "shipment": {
                "address": "Shipping address:",
                "describe": "E-commerce Berlin Expo [booth number, COMPANY NAME]",
                "country": ", Germany",
                "contact_number": "",
                "fill_in_form": "",
                "form": "",
                "deliver_hours": "Delivers of the materials will take place in the following hours:",
                "date": {
                    "day_before_event": "",
                    "event_day": "February 7 (9:00 AM)"
                },
                "deliver": "Materials can be delivered to the Expo no earlier than February 7",
                "sped": "The official forwarding agent of the Expo is Transmeble International Sp. z o.o.",
                "contact_person": "Contact person:"
            },
            "assembly": {
                "assembly": "Assembly",
                "disassembly": "Disassembly",
                "delivery": "",
                "go_to_info": "",
                "tape": "",
                "options": {
                    "day_before_event": "February 12 (from 1:00 PM)",
                    "event_day": "February 13 (8:00 AM - 9:30 AM)"
                },
                "event_day": "February 13 (5:15 PM - 10:00 PM)"
            }
        },
        "resources": {
            "upgrades": {
                "name": "Purchase additional services",
                "menu": "Add services",
                "booth": {
                    "fullprint": {
                        "name": "Full booth arrangement (fullprint)",
                        "description": "Only for standard (not Grand) booths - 3x3m. Do you want to come to fully prepared booth? Full print back wall, branded counter, carpet flooring and leaflets holder can await for your company's representatives.",
                        "specs": "To complete this order we need some graphic design! Graphics need to be sent until January 20th at the latest to Joanna Bartoszewicz on booths@ecommerceberlin.com Specs:  a) Counter - 100x100cm, TIFF, 120dpi (scale 1:1) b) Back wall - 300x250cm, TIFF, 120 dpi (scale 1:1) "
                    },
                    "counter": {
                        "name": "Fullprint counter + flooring",
                        "description": "This is a recommended option if you have your branding/advertising elements like textile ad wall or roll-ups. This option is a cost-saver and provides some luxury :) (flooring) and convenience (counter)",
                        "specs": "To complete this order we need some graphic design! Please prepare them and send to hello@ecommerceberlin.com. Counter - 100x100cm, TIFF, 120dpi (scale 1:1) "
                    },
                    "flooring": {
                        "name": "9 sqm carpet lay",
                        "description": "2 high chairs and 1 high table are included in basic offer. If you need carpet on your exhibition please upgrade with this package. You will get carpet flooring.",
                        "specs": "Available colors: light grey, dark grey, red, orange, blue, green, red)\nPlease inform branding supplier which color you'd like to use: Joanna Bartoszewicz on booths@ecommerceberlin.com"
                    },
                    "osb": {
                        "name": "Full booth arrangement with OSB back wall",
                        "description": "Only for standard (not Grand) booths - 3x3m. Do you want to come to fully prepared booth? OSB back wall with minimalistic graphics (your company logotype), branded counter, carpet flooring and leaflets holder. ",
                        "specs": "To complete this order we need some graphics design! Graphics need to be sent until January 20th at the latest to Joanna Bartoszewicz on booths@ecommerceberlin.com Specs: company logotype in vector format (ai, pdf, eps)."
                    },
                    "grand": {
                        "name": "Full booth arrangement for 18 sqm exhibition space",
                        "specs": "To complete this order we need some graphic design! Graphics need to be sent until January 20th at the latest to Joanna Bartoszewicz on booths@ecommerceberlin.com Specs:  a) Counter - 100x100cm, TIFF, 120dpi (scale 1:1) b) Back wall - 600x250cm, TIFF, 120 dpi (scale 1:1) ",
                        "description": "Only for Grand booths - 6x3m. Do you want to come to fully prepared booth? Full print back wall, branded counter, carpet flooring and leaflets holder can await for your company's representatives."
                    },
                    "grandflooring": {
                        "name": "18 sqm carpet lay",
                        "description": "4 high chairs and 2 high table are included in basic offer. If you need carpet on your exhibition please upgrade with this package. You will get carpet flooring.",
                        "specs": "Available colors: light grey, dark grey, red, orange, blue, green, red) Please inform branding supplier which color you'd like to use: Joanna Bartoszewicz on booths@ecommerceberlin.com"
                    }
                },
                "misc": {
                    "leaflets": {
                        "name": "Permission for marketing outside booth",
                        "description": "If you want to engange a hostess in order to distribute leaflets you are asked to purchase a permission. Does not include printing materials and distribution.",
                        "specs": ""
                    },
                    "welcomepacks": {
                        "name": "2 additional vouchers + parking card",
                        "description": "There are 4 welcome packs (including 4 vouchers and 1 parking card) per booth. If you need more vouchers or more parking card - buy this option.",
                        "specs": ""
                    },
                    "electricity": {
                        "name": "1000 Watts electricity connection",
                        "description": "Attention! The standard electric power connected to the stand is up to 500W. If you want to plug-in more items we recommend you to increase the power output. 1000W service is sufficient for having 2-3 laptops and 1 bigger display.",
                        "specs": "1000W service is insufficient if you are planning to have additional equipment e.g. coffee machine"
                    },
                    "display": {
                        "name": "50inch LED display",
                        "description": "Huge LED display with a stand, delivered to your booth. You can connect via HDMI or use a USB pen drive",
                        "specs": ""
                    },
                    "badgesponsor": {
                        "name": "Visitor Badge Sponsoring",
                        "description": "Exclusive branding visitor badges, which will be hand out to all visitors of the Fairs (approx. 5000)",
                        "specs": ""
                    },
                    "ecobags": {
                        "name": "Exclusive sponsoring of visitor eco bags",
                        "description": "Distribution of visitor bags during the event to E-commerce Berlin Expo participants (approx. 1000 pieces)",
                        "specs": ""
                    },
                    "rack": {
                        "name": "Foldable brochure rack display",
                        "description": "Would you like to share materials with the audience? Then we recommend you to book the cos tam reckhold to make your stand looking more professional",
                        "specs": ""
                    },
                    "deckchairs": {
                        "name": "20x deck chair in the chillout/coffee zone's with your logo",
                        "description": "20x deck chair in the chillout/coffee zone's with your logo",
                        "specs": ""
                    },
                    "lanyards": {
                        "description": "Hand out to every attendee during registration. \n\n\n*cost of production and delivery are born by the sponsor"
                    },
                    "electricity3kw": {
                        "name": "3000 Watts electricity connection",
                        "description": "Attention!  The electricity in the regular offer is 500W. If you want to plug-in more items we recommend you to increase the power up to 3kw",
                        "specs": "Only this service allows you to connect devices with high power consumption! e.g. coffee machine"
                    },
                    "partyticket": {
                        "specs": "",
                        "description": "Your exhibitor package includes two guaranteed tickets for the E-commerce Germany Awards and Networking Party. If you are planning to bring more than two people you need to purchase additional tickets in the amount corresponding to the number of participants. Every ticket on top of the guaranteed two needs to be purchased and confirmed.",
                        "name": "Tickets for the Networking Party"
                    }
                },
                "actions": {
                    "details": "Check details and buy!"
                },
                "dialog": "Select quantity and confirm your order"
            },
            "companydata": {
                "name": "Company data",
                "menu": "Company data",
                "subtitle": "",
                "limit": "",
                "customfields": {
                    "about": {
                        "name": "Company description",
                        "description": ""
                    },
                    "expo": {
                        "name": "Special offer for the expo",
                        "description": ""
                    },
                    "facebook": {
                        "name": "Facebook company profile",
                        "description": ""
                    },
                    "keywords": {
                        "name": "Keywords",
                        "description": ""
                    },
                    "linkedin": {
                        "name": "LinkedIn company profile",
                        "description": ""
                    },
                    "logotype": {
                        "name": "URL to the logotype (.png, .gif, .jpg)",
                        "description": ""
                    },
                    "products": {
                        "name": "Key products / services",
                        "description": ""
                    },
                    "twitter": {
                        "name": "Twitter company profile",
                        "description": ""
                    },
                    "website": {
                        "name": "Company website URL",
                        "description": ""
                    },
                    "countries": {
                        "name": "Countries of operation",
                        "description": ""
                    },
                    "name": {
                        "name": "Company name",
                        "description": ""
                    },
                    "opengraph_image": {
                        "name": "Customized image for social media activities",
                        "description": "A customized image which you can post on your social media channels to promote your attendance at the E-commerce Berlin Expo 2019. "
                    },
                    "event_manager": {
                        "name": "Head of the delegation during the Expo",
                        "description": "Please provide an E-mail address"
                    },
                    "lang": {
                        "name": "Preferred language of communication",
                        "description": ""
                    },
                    "invitation_template": {
                        "name": "Visitor invitation template",
                        "description": "Prepare a template ready to be sent to visitors you would like to meet at the expo. "
                    },
                    "pr_manager": {
                        "name": "PR Manager"
                    },
                    "sales_manager": {
                        "name": "Contact person for Visitors",
                        "description": ""
                    },
                    "xing": {
                        "name": "Xing company profile"
                    }
                },
                "fields": {
                    "countries_choices": {
                        "national": "Germany",
                        "europe": "Europe",
                        "global": "World",
                        "other": "Other"
                    },
                    "name": "Field name",
                    "value": "Value",
                    "updated_at": "Updated at",
                    "keywords_choices": {
                        "logistics": "Logistics",
                        "payment": "Payment",
                        "platform": "E-shop platform",
                        "sales_generation": "Sales generation",
                        "software": "Software",
                        "communication": "Communication",
                        "customer_support": "Customer support",
                        "analytics": "Analitycs",
                        "international_sales": "International sales",
                        "omnichannel": "Omnichannel",
                        "infrastructure": "Infrastructure"
                    },
                    "lang_choices": {
                        "en": "english",
                        "pl": "",
                        "de": "deutsch"
                    }
                },
                "actions": {
                    "preview": "Profile preview"
                }
            },
            "representatives": {
                "menu": "Company representatives",
                "name": "Register company representatives",
                "fields": {
                    "profile": {
                        "fname": "First name",
                        "lname": "Last name",
                        "position": "Position",
                        "phone": "Phone",
                        "email": "E-mail address"
                    }
                },
                "noresults": "No records... Add new representatives"
            },
            "rewards": {
                "menu": "Rewards",
                "name": "Rewards",
                "body_text_1": "To participate in the &amp;",
                "body_text_2": " and be able to win rewards you must use dedicated tracking link. See ",
                "body_text_3": " for details."
            },
            "logistics": {
                "menu": "Logistics",
                "name": "Logistics"
            },
            "ranking": {
                "menu": "Ranking",
                "name": "Ranking",
                "limit": "",
                "subtitle": "You earn points by promoting your participation in the event as an exhibitor. Use the promo materials we have prepared for you. Every click on your customized link to the E-commerce Berlin Expo website equals 1 point. \n\n> The ranking refreshes once a day. The points can be collected until 11:59 PM CET on the 4th of February, 2020. The final results will be announced at 1:00 PM CET on the 5th of February, 2020.\n\n\nDue to the local nature of the event and the fact that competition indirectly serves the idea of inviting new participants who are able to personally attend the Expo, we only count votes originating from countries that are currently represented by the top 80% of registered visitors. \n\nUsage of any automated scripting/services, paid mass services or another automatic device, program, algorithm or technology which perform the same action, as well as any kind of automation executed by a third party in the voting process will result in the removal of the submission and canceling of the participation in the contest and will be immediately executed by the Organizer.",
                "fields": {
                    "stats": "Points",
                    "domain": "Domain",
                    "slug": "Domain",
                    "profile": {
                        "name": "Company"
                    },
                    "export": "Export"
                },
                "list": {
                    "brand_name": "",
                    "domain": "",
                    "points": ""
                }
            },
            "scans": {
                "menu": "Your Scans",
                "name": "Your Scans",
                "fields": {
                    "participant": {
                        "profile": {
                            "fname": "First name",
                            "lname": "Last name",
                            "cname2": "Company name",
                            "position": "Position"
                        }
                    },
                    "refresh": "refresh"
                },
                "status": {
                    "agreed": "Confirmed",
                    "rejected": "Rejected",
                    "scheduled": "Scheduled"
                },
                "info": {
                    "menu": "Badge Scanner Instructions",
                    "name": "Badge Scanner Instructions"
                },
                "noresults": "This feature may not be enabled for you. Sorry.",
                "noresultsmore": ""
            },
            "creatives": {
                "menu": "Promo materials",
                "name": "Promo materials",
                "heading": "  Do you want to join the contest? We recommend using promo materials provided below.",
                "subheading": "Wait... there is more!",
                "newsletters": {
                    "invite": {
                        "title": "Booth Meeting Invitation!",
                        "description": "Use this customized newsletter to inform your partners and clients about participating in the expo. The tracking link is already applied."
                    }
                },
                "banners": "Banners",
                "choose_size": "Choose size",
                "langs": {
                    "pl": "POLSKI",
                    "en": "ENGLISH",
                    "undefined": "",
                    "de": "GERMAN"
                },
                "version": {
                    "english": "E-mail template - english",
                    "german": "E-mail template - deutsch"
                },
                "fields": {
                    "image_downloaded": "Image downloaded",
                    "image_body": "Important! Please remember that you have to use your tracking link."
                },
                "links": {
                    "disabled": "Oooops! You must fill in some data: ",
                    "preview": "Image that will be published on social websites",
                    "logotype": {
                        "title": "Link promoting your profile - with default image (your logotype)",
                        "description": "We designed some default graphics that is shared each time your profile link is posted on social websites. "
                    },
                    "opengraph_image": {
                        "title": "Custom link with custom graphics",
                        "description": "Do you want to excel? Upload custom graphics that will be shared when using this link."
                    }
                },
                "actions": {
                    "copy_html_to_clipboard": "Copy HTML To the Clipboard",
                    "copy_to_clipboard": "Copy To Clipboard",
                    "copy_url_to_clipboard": "Copy URL to the Clipboard",
                    "download_html": "Download HTML",
                    "download_zip": "Download .zip",
                    "download": "Download",
                    "copy_tracking_link_to_clipboard": "Copy tracking link to clipboard",
                    "copy_embed_code": "Copy embed code",
                    "preview": "Preview",
                    "jumpto": "Jump to Profile",
                    "close": "Close"
                },
                "types": {
                    "link": {
                        "title": "Your company universal tracking link"
                    }
                }
            },
            "newsletters": {
                "menu": "Newsletter templates",
                "name": "Newsletter templates",
                "fields": {
                    "name": "Internal name of newsletter",
                    "data": {
                        "sender_name": "Sender name"
                    },
                    "sender_email": "Sender e-mail address",
                    "template": "Custom message"
                }
            },
            "meetups": {
                "menu": "RSVPs",
                "name": "RSVPs",
                "limit": " %{limit} invite(s) left.",
                "subtitle": "At the beginning, you have 30 invitations. If you participate in the contest, which is integrated in the dashboard and you achieve at least 50 points, you get a mega package of invitations (50 additional invitations). You can add it up to 200 records (for 200 points), which is a limit per company. \n\n > *The maximum limit of invitations per company: 200 records.",
                "noresults": "Navigate to Browse participants to invite some people.",
                "noresultsmore": "",
                "fields": {
                    "message": "Message",
                    "message_create": "Type in your message",
                    "creative_id": "Choose your template",
                    "comment": "Comment",
                    "participant_id": "",
                    "status": {
                        "agreed": "Confirmed",
                        "rejected": "Rejected",
                        "scheduled": "Scheduled"
                    },
                    "data": {
                        "from_name": "Sender name",
                        "from_email": "Sender e-mail address"
                    },
                    "participant": {
                        "name": "Name",
                        "profile": {
                            "title": "Check invitation details",
                            "fname": "First name",
                            "lname": "Last name",
                            "cname2": "Company name",
                            "position": "Position"
                        }
                    }
                },
                "tabs": {
                    "form": "Create new meeting request",
                    "help": "Need help? "
                }
            },
            "campaigns": {
                "menu": "Email Campaigns",
                "name": "Email Campaigns",
                "creative": "Create new campaign",
                "noresults": "This feature is not yet enabled for your company.",
                "noresultsmore": "However...",
                "fields": {
                    "fname": "First name",
                    "lname": "Last name",
                    "cname2": "Company",
                    "position": "Position",
                    "name": "Name",
                    "scheduled_at": "Scheduled at",
                    "contactlist_ids": "Choose lists you want to send to...",
                    "creative_id": "Select newsletter template",
                    "data": {
                        "from_email": "From (email)",
                        "from_name": "From (name)",
                        "subject": "Subjects"
                    }
                }
            },
            "imports": {
                "menu": "Imported contacts",
                "name": "Imported contacts",
                "fields": {
                    "title": "Import contacts",
                    "name": "Import's name",
                    "created_at": "Created at",
                    "contactlist": "Contactlist name",
                    "created_by": "Created by",
                    "hint": "Paste or enter email addresses. One address per line.",
                    "drop": "Drop files or click here to select files to upload.",
                    "success": "Success! File loaded!",
                    "found": "Found data",
                    "assignment": "Assignment",
                    "assignment_body": "What is it?"
                },
                "tabs": {
                    "import_manually": "Import manually",
                    "import_csv": "Upload CSV file"
                }
            },
            "contacts": {
                "menu": "Imported Contacts",
                "name": "Contacts",
                "noresults": "Results not found",
                "fields": {
                    "comment": "Comment",
                    "contactlist_ids": "Lists",
                    "data": {
                        "fname": "First name",
                        "lname": "Last name",
                        "phone": "Phone",
                        "cname2": "Company name",
                        "position": "Job position",
                        "linkedin": "Linkedin",
                        "twitter": "Twitter",
                        "facebook": "Facebook",
                        "contactlist_ids": "Choose list(s)",
                        "name": "Import's name",
                        "sent_at": "Sent at"
                    }
                },
                "actions": {
                    "import": "Add/Import Contacts"
                }
            },
            "visitors": {
                "menu": "Browse participants",
                "name": "Browse participants",
                "tabs": {
                    "invitation": "Send invitation",
                    "subject": "Subject",
                    "message": "Message"
                },
                "actions": {
                    "invite": "Invite"
                },
                "fields": {
                    "creative": "Select newsletter",
                    "profile": {
                        "fname": "First name",
                        "lname": "Last name",
                        "cname2": "Company name",
                        "position": "Position",
                        "domain": "Domain"
                    }
                }
            },
            "participants-by-code": {
                "name": "Participants"
            },
            "purchases": {
                "menu": "Purchases"
            }
        },
        "tutorials": {
            "competition": {
                "title": "How to use promotional materials and win valuable prizes"
            }
        },
        "visitors": {
            "form": {
                "submit": "REGISTER FOR FREE"
            }
        }
    },
    "de": {
        "aor": {
            "action": {
                "delete": "Löschen",
                "show": "Show",
                "list": "List",
                "save": "Save",
                "create": "Erstellen",
                "edit": "Bearbeiten",
                "cancel": "Cancel",
                "refresh": "Aktualisieren",
                "preview": "Preview",
                "add_filter": "Add filter",
                "remove_filter": "Delete filter",
                "back": "Back",
                "close": "Close",
                "export": "Export"
            },
            "boolean": {
                "true": "Yes",
                "false": "No"
            },
            "page": {
                "list": "%{name}",
                "edit": "%{name} #%{id}",
                "show": "%{name} #%{id}",
                "create": "Create %{name}",
                "delete": "Delete %{name} #%{id}",
                "dashboard": "Dashboard",
                "not_found": "Page not found",
                "meeting_request": "Send meeting request",
                "participant_id": "Participant"
            },
            "input": {
                "image": {
                    "upload_several": "",
                    "upload_single": ""
                }
            },
            "message": {
                "yes": "Yes",
                "no": "No",
                "are_you_sure": "Are you sure?",
                "about": "About",
                "not_found": "Page not found"
            },
            "navigation": {
                "no_results": "Not found",
                "page_out_of_boundaries": "Strona %{page} jest poza limitem",
                "page_out_from_end": "Nie można wyjść poza ostatnią stronę",
                "page_out_from_begin": "Nie można wyjść poza pierwszą stronę",
                "page_range_info": "%{offsetBegin}-%{offsetEnd} of %{total}",
                "next": "Next",
                "prev": "Prev"
            },
            "auth": {
                "username": "Username",
                "password": "Password",
                "sign_in": "Sign In",
                "sign_in_error": "Authorization failed, please try again",
                "logout": "Logout"
            },
            "notification": {
                "updated": "Updated successfully",
                "created": "Erfolgreich erstellt",
                "deleted": "Removed successfully",
                "item_doesnt_exist": "The element does not exist",
                "http_error": "There was a connection error with the server"
            },
            "validation": {
                "required": "Required",
                "minLength": "Must be at least %{min} signs",
                "maxLength": "Must be %{max} or less",
                "minValue": "Minimum %{min}",
                "maxValue": "Maksimum %{max}",
                "number": "Must be a number",
                "email": "Must be a valid email address",
                "name": "Name must be more descriptive"
            }
        },
        "pos": {
            "logout": "Logout",
            "ranking": "Ranking",
            "sros": "test",
            "search": "Search",
            "configuration": "Sprache",
            "language": "Sprache",
            "theme": {
                "name": "Theme",
                "light": "Light",
                "dark": "Dark"
            },
            "sections": {
                "suggest_a_meeting": ""
            },
            "support": {
                "title": "Kundendienst",
                "description": "Benötigst du Unterstützung bei der Nutzung des Forums? Schreib mir eine E-Mail oder rufe mich gerne an. "
            }
        },
        "common": {
            "sales": {
                "starts": "sales starts",
                "ends": "Verkauf endet",
                "net": "net",
                "gross": "net",
                "remaining": "Remaining",
                "pcs": "pcs",
                "bookable": "Anzahl"
            },
            "actions": {
                "buy": "Buy now!",
                "modify": "Löschen",
                "quantity": "Anzahl"
            },
            "statuses": {
                "unavailable": "Unavailable",
                "already_bought": "Already bought",
                "success": "Success!",
                "cancelled": "Gestrichen",
                "ok": "Beendet",
                "new": "in Bearbeitung",
                "confirmed": "Confirmed",
                "hold": "Waiting for payment"
            },
            "langs": {
                "pl": "polski",
                "en": "english",
                "de": "deutsch"
            },
            "thankyou": "Danke für Deine Bestellung"
        },
        "menu": {
            "sections": {
                "promote": "Teilnahme promoten",
                "suggest_a_meeting": "Einladung zum Stand Meeting",
                "crucial": "Ausstellerprofil",
                "leads": "Kundenkontakte",
                "settings": "Einstellungen"
            }
        },
        "actions": {
            "copied": "Copied to clipboard",
            "share_linkedin": "Share on Linkedin",
            "share_twitter": "Share on Twitter",
            "share_facebook": "Share on Facebook"
        },
        "auth": {
            "errors": {
                "badtoken": "Bad token!"
            },
            "unauthorized": "Unauthorized",
            "support": "Please contact with sales support if you cannot access this application.",
            "checkEmail": "Check e-mail for further instructions",
            "fields": {
                "email": "Your business e-mail address",
                "password": "Password"
            },
            "loginByPassword": {
                "hint": "loginByPassword hint"
            },
            "loginByRequest": {
                "hint": "loginByRequest hint"
            },
            "actions": {
                "loginWithPassword": "Sign In",
                "requestAccess": "Request an access"
            }
        },
        "prizes": {
            "name": "Platzierung & Preise",
            "must_be_winner": "You must be #1",
            "position_2": "Only for position #",
            "position_1": "Eure Platzierung muss zwischen # sein",
            "and": " and #",
            "points": " points.",
            "place": "Deine aktuelle Platzierung:",
            "unknown": "#unbekannt",
            "presentation": {
                "title": "Präsentation",
                "description": "Eine 30-minütige Präsentation auf einer der drei Hauptbühnen. Deine Präsentation wird um 15:50 Uhr stattfinden und offiziell Teil der Agenda der E-commerce Berlin Expo 2020 sein.",
                "image": ""
            },
            "video_interview": {
                "title": "Video Interview",
                "description": "Ein Video Interview wird mit einem Vertreter eurer Firma auf der Expo durchgeführt. Das Video Interview wird auf dem EBE Youtube Kanal sowie sämtlichen Social Media Kanälen veröffentlicht.",
                "image": ""
            },
            "brand_highlight": {
                "title": "Logo highlight",
                "description": "Dein Logo wird auf der E-commerce Berlin Expo Webseite neben den führenden Unternehmen erscheinen.",
                "image": ""
            },
            "leaflets": {
                "title": "Verteilen von Flyern Durch Hostessen",
                "description": "Das Verteilen von Flyern nicht nur am Stand\n*Die Produktion der Flyer und das Engagieren einer Hostesse/ eines Hostessen und die damit verbundenen Kosten obliegen dem Sponsor",
                "image": ""
            },
            "earlybird": {
                "title": "Zugang zu Early-Bird Sales",
                "description": "Erhalte Early-Bird Preise für die Stände auf der nächsten E-commerce Berlin Expo im Februar 2021. Du bekommst Zugang zur gesamten Ausstellungsfläche um die beste Location für deinen Stand zu wählen, vor allen anderen!"
            },
            "meetups": {
                "title": "Mega-Paket - Einladungen",
                "description": "50 erzielte Punkte bringen dir 50 zusätzliche Einladungen in unserem Matchmaking-Tool. \n\nDas reicht nicht? Dann weiter Punkte sammeln. :\nWenn du nochmal 50 Punkte erzielst, dann bekommst du noch mal 50 Einladungen. Das Maximum beträgt 200 Einladungen (bei 200 Punkten), was auch das Limit für jedes Unternehmen ist. \n\nMit diesem Tool hast du die Möglichkeit die Besucher der Expo, die sich registriert haben für die E-commerce Berlin Expo, anzuschreiben um Termine zu vereinbaren und somit einen noch besseren Outcome zu bekommen. \n\n> *Das Maximum an Einladungen beträgt 200 Leads pro Unternehmen. ",
                "image": ""
            },
            "scanner": {
                "title": "Badge scanner mobile app",
                "description": "You will get an access to dedicated visitor badge scanner app. Each booth representative of your company would be able to gather visitor data and export results to .xls or .csv.",
                "image": ""
            },
            "rollups": {
                "title": "Roll-up am Eingang der Ausstellerfläche\n\n*Wichtig! 50 Punkte müssen erzielt werden, um diesen Preis zu bekommen.",
                "description": "Euer Firmenlogo wird am Eingang der Ausstellerfläche aufgehängt.",
                "image": ""
            },
            "blog": {
                "title": "Ein Gastartikel auf dem E-commerce Berlin Expo Blog",
                "description": "Einmaliger Artikel bezüglich deines Unternehmens auf https://ecommercegermany.com/. Der Artikel wird 1x im Newsletter promotet, sowie 1x auf den Social Media Kanälen (Facebook, LinkedIn, Twitter) der E-commerce Berlin Expo.",
                "image": ""
            },
            "badges": {
                "title": "Exklusives Branding der Besucherpässe",
                "description": "Exklusives Branding der Besucherpässe mit dem Logo des Gewinners. Die Badges werden an die Besucher (7000+) der E-commerce Berlin Expo 2020 verteilt."
            }
        },
        "fields": {
            "skip": "Skip, don't import",
            "fname": "Vorname",
            "lname": "Nachname",
            "cname2": "Firma",
            "email": "E-mail address",
            "phone": "Phone number"
        },
        "invites": {
            "pagetitle": "Send an invite to your contact lists",
            "import_manually": "Paste or enter manually",
            "import_csv": "Upload CSV file",
            "errors": {
                "no_email_assigned": "Select email",
                "mappings_overlap": "Check mappings"
            }
        },
        "dashboard": {
            "tutorial": "Check out our tutorial about using promo materials!",
            "welcome": {
                "title": "Willkommen zum Ausstellerforum!",
                "subtitle": " ",
                "description": "Hier findet ihr das Administrationsforum für Aussteller der E-commerce Berlin Expo 2020. Ihr könnt innerhalb des Forums, Meetings mit registrierten Besuchern arrangieren, Klienten zum Event einladen und sogar erweiterte Materialien für eure Teilnahme an der Expo gewinnen.",
                "aor_button": "Link",
                "demo_button": "Link #2"
            }
        },
        "informer": {
            "title": "Logistics information",
            "tabs": {
                "basic": "Basic information",
                "shipment": "Shipping of materials",
                "assembly": "Assembly/disassembly"
            },
            "basic": {
                "exhibition_space": "Exhibition space",
                "area": "Area:",
                "stand_options": {
                    "standard": "3m x 3m (Start-up, Standard, Hot, Super-Hot)",
                    "grand": "6m x 3m (Grand)"
                },
                "equipment": "If you have not ordered additional equipment to your booth, there will be:",
                "equipment_options": {
                    "hocker": "2 hockers",
                    "table": "1 table",
                    "voucher": "4 lunch vouchers",
                    "wifi": "WiFi password",
                    "electricity": "electric socket (300 W)"
                },
                "backwall": "The maximum dimensions of the back wall are 3 m wide x 3 m high (for the 9sqm exhibition space), 6 m x 3 m (for 18sqm exhibition space)",
                "add_equipment": "Additional equipment",
                "carpeting": "If you want a carpeting in your stand in any color of your choice - contact us at: ",
                "add_eq_contact": "Do you need additional furniture, vouchers, electricity or you want to rent a TV screen? Talk to us!",
                "see": "See visualization",
                "construction": " prepared by All in Event. You can order it by 6 April at: ",
                "representative": "Company representatives",
                "reps_info": "The number of participants on your booth is unlimited. Remember to enter their data in "
            },
            "shipment": {
                "address": "Shipping address:",
                "describe": "E-commerce Berlin Expo [booth number, COMPANY NAME]",
                "country": ", Poland",
                "contact_number": "",
                "fill_in_form": "",
                "form": "",
                "deliver_hours": "Delivers of the materials will take place in the following hours:",
                "date": {
                    "day_before_event": "",
                    "event_day": "February 7 (9:00 AM)"
                },
                "deliver": "Materials can be delivered to the Expo no earlier than February 7",
                "sped": "The official forwarding agent of the Expo is Transmeble International Sp. z o.o.",
                "contact_person": "Contact person:"
            },
            "assembly": {
                "assembly": "Assembly",
                "disassembly": "Disassembly",
                "delivery": "",
                "go_to_info": "",
                "tape": "",
                "options": {
                    "day_before_event": "February 12 (from 1:00 PM)",
                    "event_day": "February 13 (8:00 AM - 9:30 AM)"
                },
                "event_day": "February 13 (5:15 PM - 10:00 PM)"
            }
        },
        "resources": {
            "upgrades": {
                "name": "Weitere Standdienste erwerben",
                "menu": "Dienste hinzufügen",
                "booth": {
                    "fullprint": {
                        "name": "Vollständig angefertigter Stand (Voll bedruckt)",
                        "description": "Nur für die Kategorien Standard - Super Hot 3x3. Wollen Sie einen fertigen Stand vorfinden bestehend aus gebrandeter Rückwand, gebrandeter Theke, Teppichbelag und Broschürenhalter? Das Branding kann hierbei nach Wunsch erfolgen. Dann buchen Sie diese Option!",
                        "specs": "Zusatzinformation: Um die Bestellung zu vervollständigen, benötigen wir Grafikmaterial! Bitte kontaktieren Sie unseren externen Kontakt, Joanna Bartoszewicz an booths@ecommerceberlin.com schicken. Benötigt:  a) Theke - 100x100cm, TIFF, 120dpi (scale 1:1) b) Rückwand - 300x250cm, TIFF, 120 dpi (scale 1:1)"
                    },
                    "counter": {
                        "name": "Fullprint counter + flooring",
                        "description": "This is a recommended option if you have your branding/advertising elements like textile ad wall or roll-ups. This option is a cost-saver and provides some luxury :) (flooring) and convenience (counter)",
                        "specs": "Um die Bestellung zu vervollständigen, benötigen wir Grafikmaterial! Bitte in Maße 100x100cm, TIFF, 120dpi (scale 1:1) (Theke) an hello@ecommerceberlin.com schicken. "
                    },
                    "flooring": {
                        "name": "Teppichbelag 9m2",
                        "description": "2 Hocker und 1 Tische sind in dieser Leistung inbegriffen. Falls Sie einen Teppich benötigen, buchen Sie bitte diese Option",
                        "specs": "Zusatzinformation (verfügbare Farben): Hellgrau, dunkelgrau, rot, orange, grün, blau \nBitte kontaktieren Sie unseren externen Kontakt, Joanna Bartoszewicz,  bzgl. der Farbauswahl per E-Mail an: booths@ecommerceberlin.com"
                    },
                    "osb": {
                        "name": "Vollständiger Stand mit OSB Rückwand (einfaches Branding)",
                        "description": "Only for standard (not Grand) booths - 3x3m. Do you want to come to fully prepared booth? OSB back wall with minimalistic graphics (your company logotype), branded counter, carpet flooring and leaflets holder. ",
                        "specs": "Um die Bestellung zu vervollständigen, benötigen wir Grafikmaterial! Bitte kontaktieren Sie unseren externen Kontakt, Joanna Bartoszewicz an booths@ecommerceberlin.com schicken. Benötigt:  Logo des Unternehmens in Vectorformat (ai, pdf, eps)"
                    },
                    "grand": {
                        "name": "Vollständig angefertigter Stand (18m2 - volles Branding)",
                        "specs": "Um die Bestellung zu vervollständigen, benötigen wir Grafikmaterial! Bitte kontaktieren Sie unseren externen Kontakt, Joanna Bartoszewicz an booths@ecommerceberlin.com schicken. Benötigt:  a) Theke - 100x100cm, TIFF, 120dpi (scale 1:1) b) Rückwand - 600x250cm, TIFF, 120 dpi (scale 1:1)",
                        "description": "Gilt nur für diejenigen, die eine Grandfläche (6x3) gebucht haben. \nWollen Sie einen fertigen Stand vorfinden bestehend aus gebrandeter Rückwand, gebrandeter Theke, Teppichbelag und Broschürenhalter? Das Branding kann hierbei nach Wunsch erfolgen. Dann buchen Sie diese Option!"
                    },
                    "grandflooring": {
                        "name": "Teppichbelag 18m2",
                        "description": "4 Hocker und 2 Tische sind in dieser Leistung inbegriffen. Falls Sie einen Teppich benötigen, buchen Sie bitte diese Option",
                        "specs": "Hellgrau, dunkelgrau, rot, orange, grün, blau Bitte kontaktieren Sie unseren externen Kontakt, Joanna Bartoszewicz,  bzgl. der Farbauswahl per E-Mail an: booths@ecommerceberlin.com"
                    }
                },
                "misc": {
                    "leaflets": {
                        "name": "Marketing durch Flyerverteilung",
                        "description": "Möchtet ihr Messehostessen nutzen um Werbematerial zu verteilen? Bitte holt euch dazu die Erlaubnis. Wir bieten dazu keine Materialien an. Kosten der Hostessen und Druckkosten fallen beim Sponsor an",
                        "specs": ""
                    },
                    "welcomepacks": {
                        "name": "2 additional vouchers + parking card",
                        "description": "There are 4 welcome packs (including 4 vouchers and 1 parking card) per booth. If you need more vouchers or more parking card - buy this option.",
                        "specs": ""
                    },
                    "electricity": {
                        "name": "1000W Stromleistung",
                        "description": "Bitte beachten! Im regulären Fall enthält dein Paket eine Stromleistung in Höhe von 500W. Falls mehrere Geräte angeschlossen werden sollen, empfehlen wir ein Upgrade der Stromleistung. Falls die Geräte mehr Strom verbrauchen, dann empfehlen wir das Stromupgrade in Höhe von 3kW. 1kW empfehlen wir für den Anschluss von 2-3 Laptops + ein größerer Bildschirm.",
                        "specs": "1000W sind unzureichend für den Anschluss einer Kaffeemaschine beispielsweise."
                    },
                    "display": {
                        "name": "50 Zoll LED Bildschirm",
                        "description": "Großer LED Bildschirm mit Ständer (wird an Stand geliefert). Verbindung via HDMI oder USB.",
                        "specs": ""
                    },
                    "badgesponsor": {
                        "name": "Sponsoring der Besucherpässe",
                        "description": "Hierbei handelt es sich um das Sponsoring der Besucherpässe (ca. 5000) mit dem Logo des Sponsors",
                        "specs": ""
                    },
                    "ecobags": {
                        "name": "Sponsoring der Besuchertaschen",
                        "description": "Ca. 1000 gebrandete Taschen für die Besucher der E-commerce Berlin Expo, welche während der Veranstaltung ausgeteilt werden.",
                        "specs": ""
                    },
                    "rack": {
                        "name": "Broschürenhalter",
                        "description": "Sie möchten Sachen auslegen und das ansehnlich? Dann buchen Sie unseren Broschürehalter und lassen Sie die Standfläche noch besser aussehen.",
                        "specs": ""
                    },
                    "deckchairs": {
                        "name": "Sponsoring von Liegestühlen in der Kaffeezone",
                        "description": "Wollen Sie, dass die Besucher auf von Ihnen gebrandeten Stühlen entspannen und die Expo aus einer ruhigeren Atmosphäre betrachten? Dann ist dieses Paket genau das richtige. Durch diese Möglichkeit bieten wir Ihnen an, 20 angefertigte, mit Ihrem Logo bedruckte Liegestühle zur Entspannung bereitzustellen",
                        "specs": ""
                    },
                    "lanyards": {
                        "description": "Hand out to every attendee during registration. \n\n\n*cost of production and delivery are born by the sponsor"
                    },
                    "electricity3kw": {
                        "name": "3000W Stromleistung",
                        "description": "Bitte beachten! Im regulären Fall enthält dein Paket eine Stromleistung in Höhe von 500W. Falls mehrere Geräte angeschlossen werden sollen, empfehlen wir ein Upgrade der Stromleistung. Falls die Geräte mehr Strom verbrauchen, dann empfehlen wir das Stromupgrade in Höhe von 3kW",
                        "specs": "Nur mit der 3kw Leistung wäre es möglich, eine Kaffeemaschine problemlos laufen zu lassen. Eine kleiner Stromleitung, wie z.B. 1kW, ermöglich dies nicht."
                    },
                    "partyticket": {
                        "specs": "",
                        "description": "Dein Ausstellerpaket beinhaltet zwei garantierte Tickets für die E-commerce Germany Awards und Networking Party. Falls ihr vorhabt mit mehreren Leuten dabei zu sein, dann müssen Extratickets exakt zu der Anzahl der kommenden Leute erworben werden. Jedes weitere Ticket zu den zwei garantierten muss erworben und bestätigt werden.",
                        "name": "Tickets für die Networking Party"
                    }
                },
                "actions": {
                    "details": "Check details and buy!"
                },
                "dialog": "Anzahl wählen und bestaetigen"
            },
            "companydata": {
                "name": "Firma",
                "menu": "Firma",
                "subtitle": "",
                "limit": "",
                "customfields": {
                    "about": {
                        "name": "Unternehmensbeschreibung",
                        "description": ""
                    },
                    "expo": {
                        "name": "Angebot für die Expo",
                        "description": ""
                    },
                    "facebook": {
                        "name": "Facebook Firmenseite",
                        "description": ""
                    },
                    "keywords": {
                        "name": "Stichwörter",
                        "description": ""
                    },
                    "linkedin": {
                        "name": "LinkedIn Firmenprofil",
                        "description": ""
                    },
                    "logotype": {
                        "name": "URL zum Logo (.png, .gif, .jpg)",
                        "description": ""
                    },
                    "products": {
                        "name": "Produkt / Dienstleistung",
                        "description": ""
                    },
                    "twitter": {
                        "name": "Twitter Firmenseite",
                        "description": ""
                    },
                    "website": {
                        "name": "URL der Homepage",
                        "description": ""
                    },
                    "countries": {
                        "name": "Aktive Operationsregionen",
                        "description": ""
                    },
                    "name": {
                        "name": "Firma",
                        "description": ""
                    },
                    "opengraph_image": {
                        "name": "Angepasstes Bild für soziale Netzwerkaktivitäten",
                        "description": "Ein individuell erstelltes Bild, um eure Anwesenheit auf der E-commerce Berlin Expo 2019, auf euren sozialen Netzwerken zu promoten. "
                    },
                    "event_manager": {
                        "name": "Ansprechpartner für die Messeteilnahme",
                        "description": "Bitte E-Mail Adresse eintragen"
                    },
                    "lang": {
                        "name": "Bevorzugte Kommunikationssprache",
                        "description": ""
                    },
                    "invitation_template": {
                        "name": "Einladungsvorlage für Besucher",
                        "description": "Prepare a template ready to be sent to visitors you would like to meet at the expo. Erstelle eine Vorlage, welche du schnell an Besucher bezüglich eines Meetings auf der Expo, schicken kannst. "
                    },
                    "pr_manager": {
                        "name": "PR Manager"
                    },
                    "sales_manager": {
                        "name": "Kontaktperson für Besucher",
                        "description": ""
                    },
                    "xing": {
                        "name": "Xing Firmenprofil"
                    }
                },
                "fields": {
                    "countries_choices": {
                        "national": "Germany",
                        "europe": "Europe",
                        "global": "World",
                        "other": "Other"
                    },
                    "name": "Feld",
                    "value": "Inhalt",
                    "updated_at": "Aktualisiert am",
                    "keywords_choices": {
                        "logistics": "Logistics",
                        "payment": "Payment",
                        "platform": "E-shop platform",
                        "sales_generation": "Sales generation",
                        "software": "Software",
                        "communication": "Communication",
                        "customer_support": "Customer support",
                        "analytics": "Analitycs",
                        "international_sales": "International sales",
                        "omnichannel": "Omnichannel",
                        "infrastructure": "Infrastructure"
                    },
                    "lang_choices": {
                        "en": "english",
                        "pl": "",
                        "de": "deutsch"
                    }
                },
                "actions": {
                    "preview": "Profilvorschau"
                }
            },
            "representatives": {
                "menu": "Firmenvertreter",
                "name": "Firmenvertreter registrieren",
                "fields": {
                    "profile": {
                        "fname": "Vorname",
                        "lname": "Nachname",
                        "position": "Position",
                        "phone": "Phone",
                        "email": "E-mail adresse"
                    }
                },
                "noresults": "No records... Add new representatives"
            },
            "rewards": {
                "menu": "Preise",
                "name": "Preise",
                "body_text_1": "To participate in the &amp;",
                "body_text_2": "&amp; and be able to win rewards you must use dedicated tracking link.",
                "body_text_3": " for details."
            },
            "logistics": {
                "menu": "Logistics",
                "name": "Logistics"
            },
            "ranking": {
                "menu": "Platzierung",
                "name": "Platzierung",
                "limit": "",
                "subtitle": "Du gewinnst Punkte, indem du deine Teilnahme an der Expo als Aussteller promotest. Nutze das Werbematerial, welches wir vorbereitet haben. Jeder Klick auf die E-commerce Berlin Expo Website mit deinem persönlich angestellten Link ergibt ein Punkt.\n\n> The ranking refreshes once a day. The points can be collected until 11:59 PM CET on the 4th of February, 2020. The final results will be announced at 1:00 PM CET on the 5th of February, 2020.\n\n\nDue to the local nature of the event and the fact that competition indirectly serves the idea of inviting new participants who are able to personally attend the Expo, we only count votes originating from countries that are currently represented by the top 80% of registered visitors. \n\nUsage of any automated scripting/services, paid mass services or another automatic device, program, algorithm or technology which perform the same action, as well as any kind of automation executed by a third party in the voting process will result in the removal of the submission and canceling of the participation in the contest and will be immediately executed by the Organizer.",
                "fields": {
                    "stats": "Punkte",
                    "domain": "Domain",
                    "slug": "Domain",
                    "profile": {
                        "name": "Firma"
                    },
                    "export": "Export"
                },
                "list": {
                    "brand_name": "",
                    "domain": "",
                    "points": ""
                }
            },
            "scans": {
                "menu": "Deine Scans",
                "name": "Deine Scans",
                "fields": {
                    "participant": {
                        "profile": {
                            "fname": "Vorname",
                            "lname": "Nachname",
                            "cname2": "Firma",
                            "position": "Position"
                        }
                    },
                    "refresh": "Aktualisieren"
                },
                "status": {
                    "agreed": "Confirmed",
                    "rejected": "Rejected",
                    "scheduled": "Scheduled"
                },
                "info": {
                    "menu": "Anleitung zum Badge Scanner",
                    "name": "Anleitung zum Badge Scanner"
                },
                "noresults": "This feature may not be enabled for you. Sorry.",
                "noresultsmore": ""
            },
            "creatives": {
                "menu": "Werbematerial",
                "name": "Werbematerial",
                "heading": " Nimm am Contest teil! Nutze dazu unser Werbematerial.",
                "subheading": "Wait... there is more!",
                "newsletters": {
                    "invite": {
                        "title": "Einladung zum Stand Meeting!",
                        "description": "Nutze unsere fertiggestellten Newsletter, um Klienten und Partner über eure Anwesenheit auf der Expo wissen zu lassen. Der Tracking Link ist bereits darin enthalten."
                    }
                },
                "banners": "Banners",
                "choose_size": "Choose size",
                "langs": {
                    "pl": "POLSKI",
                    "en": "ENGLISH",
                    "undefined": "",
                    "de": "DEUTSCH"
                },
                "version": {
                    "english": "E-mail template - english",
                    "german": "E-mail template - deutsch"
                },
                "fields": {
                    "image_downloaded": "Image downloaded",
                    "image_body": "Important! Please remember that you have to use your tracking link."
                },
                "links": {
                    "disabled": "Oooops! You must fill in some data: ",
                    "preview": "Image that will be published on social websites",
                    "logotype": {
                        "title": "Link zum promoten eures Profils - mit Standard Grafik (Logo)",
                        "description": "Wir haben einige Standard Grafiken erstellt, welche mit eurem Profil auf sozialen Netzwerken geteilt werden kann. "
                    },
                    "opengraph_image": {
                        "title": "Persönlich erstellter Link mit persönlich erstellten Grafiken",
                        "description": "Wählt die beste Option: persönlich erstellte Grafiken hochladen welche mit eurem Link geteilt werden können."
                    }
                },
                "actions": {
                    "copy_html_to_clipboard": "Copy HTML To the Clipboard",
                    "copy_to_clipboard": "Copy To Clipboard",
                    "copy_url_to_clipboard": "Copy URL to the Clipboard",
                    "download_html": "Download HTML",
                    "download_zip": "Download .zip",
                    "download": "Download",
                    "copy_tracking_link_to_clipboard": "Copy tracking link to clipboard",
                    "copy_embed_code": "Copy embed code",
                    "preview": "Preview",
                    "jumpto": "Jump to Profile",
                    "close": "Close"
                },
                "types": {
                    "link": {
                        "title": "Your company universal tracking link"
                    }
                }
            },
            "newsletters": {
                "menu": "Newsletter Vorlagen",
                "name": "Newsletter Vorlagen",
                "fields": {
                    "name": "Internal name of newsletter",
                    "data": {
                        "sender_name": "Sender name"
                    },
                    "sender_email": "Sender e-mail address",
                    "template": "Custom message"
                }
            },
            "meetups": {
                "menu": "RSVPs",
                "name": "RSVPs",
                "limit": " %{limit} Einladung(en) übrig",
                "subtitle": "Am Anfang hast du 15 Einladungen. Wenn du im Wettbewerb, welcher innerhalb des Dashboards gerade läuft, mindestens 20 Punkte erreichst, erhältst du das sog. Mega Paket an Einladungen (50 Stück.) Somit wärst du bei 65 Einladungen. \n\nFür jede weitere 5 Punkte bekommst du eine Einladung dazu. \nErreicht jemand 50 Punkte, dann hat man 75 Einladungen insgesam\n",
                "noresults": "Navigate to Browse participants to invite some people.",
                "noresultsmore": "",
                "fields": {
                    "message": "Nachricht",
                    "message_create": "Nachricht eingeben",
                    "creative_id": "Choose your template",
                    "comment": "Kommentar",
                    "participant_id": "",
                    "status": {
                        "agreed": "Confirmed",
                        "rejected": "Rejected",
                        "scheduled": "Scheduled"
                    },
                    "data": {
                        "from_name": "Sender name",
                        "from_email": "Sender e-mail address"
                    },
                    "participant": {
                        "name": "Name",
                        "profile": {
                            "title": "Überprüfen der Einladungen",
                            "fname": "Vorname",
                            "lname": "Nachname",
                            "cname2": "Firma",
                            "position": "Position"
                        }
                    }
                },
                "tabs": {
                    "form": "Create new meeting request",
                    "help": "Need help? "
                }
            },
            "campaigns": {
                "menu": "E-Mail Kampagnen",
                "name": "E-Mail Kampagnen",
                "creative": "Create new campaign",
                "noresults": "This feature is not yet enabled for your company.",
                "noresultsmore": "However...",
                "fields": {
                    "fname": "Vorname",
                    "lname": "Nachname",
                    "cname2": "Company",
                    "position": "Position",
                    "name": "Name",
                    "scheduled_at": "Scheduled at",
                    "contactlist_ids": "Choose lists you want to send to...",
                    "creative_id": "Select newsletter template",
                    "data": {
                        "from_email": "From (email)",
                        "from_name": "From (name)",
                        "subject": "Subjects"
                    }
                }
            },
            "imports": {
                "menu": "Importierte Kontakte",
                "name": "Importierte Kontakte",
                "fields": {
                    "title": "Import contacts",
                    "name": "Import's name",
                    "created_at": "Created at",
                    "contactlist": "Contactlist name",
                    "created_by": "Created by",
                    "hint": "Paste or enter email addresses. One address per line.",
                    "drop": "Drop files or click here to select files to upload.",
                    "success": "Success! File loaded!",
                    "found": "Found data",
                    "assignment": "Assignment",
                    "assignment_body": "What is it?"
                },
                "tabs": {
                    "import_manually": "Import manually",
                    "import_csv": "Upload CSV file"
                }
            },
            "contacts": {
                "menu": "Importierte Kontakte",
                "name": "Contacts",
                "noresults": "Results not found",
                "fields": {
                    "comment": "Comment",
                    "contactlist_ids": "Lists",
                    "data": {
                        "fname": "Vorname",
                        "lname": "Nachname",
                        "phone": "Phone",
                        "cname2": "Firma",
                        "position": "Job position",
                        "linkedin": "Linkedin",
                        "twitter": "Twitter",
                        "facebook": "Facebook",
                        "contactlist_ids": "Choose list(s)",
                        "name": "Import's name",
                        "sent_at": "Sent at"
                    }
                },
                "actions": {
                    "import": "Kontakte hinzufügen/importieren"
                }
            },
            "visitors": {
                "menu": "Teilnehmer finden",
                "name": "Teilnehmer finden",
                "tabs": {
                    "invitation": "Send invitation",
                    "subject": "Subject",
                    "message": "Nachricht"
                },
                "actions": {
                    "invite": "EINLADEN"
                },
                "fields": {
                    "creative": "Select newsletter",
                    "profile": {
                        "fname": "Vorname",
                        "lname": "Nachname",
                        "cname2": "Firma",
                        "position": "Position",
                        "domain": "Domain"
                    }
                }
            },
            "participants-by-code": {
                "name": "Participants"
            },
            "purchases": {
                "menu": "Bestellung"
            }
        },
        "tutorials": {
            "competition": {
                "title": "wie man Werbematerial verwendet und wertvolle Preise gewinnt"
            }
        },
        "visitors": {
            "form": {
                "submit": "KOSTENLOS REGISTRIEREN"
            }
        }
    }
}

export default languages;
