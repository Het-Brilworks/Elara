# Design Export Context

- Generated at: `2026-02-16T12:09:27.199Z`
- Document ID: `87c7a843-454b-485e-b908-92489732199a`
- Page count: 10

## Original Prompt

```text
A calming and personalized wellness app designed to support women through their fertility, prenatal, and postnatal journey. The app offers guided yoga sessions, meditation, progress tracking, expert consultations, and community support tailored to each stage. With a soft, intuitive interface and smart recommendations, it helps users improve physical strength, emotional well-being, and overall recovery in a safe and supportive environment.
```

## Theme (JSON)

```json
{
  "fonts": {
    "primary": "google:Nunito",
    "secondary": "google:DM Sans"
  },
  "colors": {
    "light": {
      "primary": "#A8B5A0",
      "on_primary": "#FFFFFF",
      "secondary": "#D4A5A5",
      "on_secondary": "#FFFFFF",
      "accent": "#E8DCC4",
      "background": "#FAF7F2",
      "surface": "#FFFFFF",
      "on_surface": "#4A4A4A",
      "primary_text": "#3D3D3D",
      "secondary_text": "#757575",
      "hint": "#BDBDBD",
      "error": "#E57373",
      "on_error": "#FFFFFF",
      "success": "#81C784",
      "divider": "#E0E0E0",
      "transparent": "#00000000"
    },
    "dark": {
      "primary": "#8C9985",
      "on_primary": "#FFFFFF",
      "secondary": "#B08989",
      "on_secondary": "#FFFFFF",
      "accent": "#C4B9A4",
      "background": "#2D2D2D",
      "surface": "#383838",
      "on_surface": "#FAF7F2",
      "primary_text": "#FAF7F2",
      "secondary_text": "#D1D1D1",
      "hint": "#8E8E8E",
      "error": "#EF9A9A",
      "on_error": "#2D2D2D",
      "success": "#A5D6A7",
      "divider": "#4A4A4A",
      "transparent": "#00000000"
    }
  },
  "text_styles": {
    "headline_large": {
      "font": "primary",
      "size": 34,
      "weight": 700,
      "height": 1.3
    },
    "headline_medium": {
      "font": "primary",
      "size": 28,
      "weight": 600,
      "height": 1.35
    },
    "title_large": {
      "font": "primary",
      "size": 22,
      "weight": 600,
      "height": 1.4
    },
    "title_medium": {
      "font": "primary",
      "size": 17,
      "weight": 600,
      "height": 1.4
    },
    "body_large": {
      "font": "secondary",
      "size": 17,
      "weight": 400,
      "height": 1.6
    },
    "body_medium": {
      "font": "secondary",
      "size": 15,
      "weight": 400,
      "height": 1.6
    },
    "body_small": {
      "font": "secondary",
      "size": 13,
      "weight": 400,
      "height": 1.5
    },
    "label_large": {
      "font": "secondary",
      "size": 15,
      "weight": 600,
      "height": 1.4
    },
    "label_medium": {
      "font": "secondary",
      "size": 13,
      "weight": 600,
      "height": 1.4
    },
    "label_small": {
      "font": "secondary",
      "size": 11,
      "weight": 600,
      "height": 1.3
    }
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32
  },
  "radii": {
    "sm": 12,
    "md": 20,
    "lg": 32,
    "full": 9999
  },
  "shadows": {
    "sm": {
      "color": "#A8B5A01A",
      "dx": 0,
      "dy": 2,
      "blur": 8,
      "spread": 0
    },
    "md": {
      "color": "#A8B5A026",
      "dx": 0,
      "dy": 4,
      "blur": 12,
      "spread": 0
    },
    "lg": {
      "color": "#A8B5A033",
      "dx": 0,
      "dy": 8,
      "blur": 24,
      "spread": 0
    },
    "xl": {
      "color": "#A8B5A040",
      "dx": 0,
      "dy": 12,
      "blur": 32,
      "spread": 0
    }
  }
}
```

## Pages

### 1. Onboarding

- Frame ID: `a41f44f0-0edc-4f7f-ad13-1446a0363179`
- Original page prompt: "A welcome page to select the current journey stage like fertility, prenatal, or postnatal"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 32,
                "2": 32,
                "3": 32,
                "4": 32
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xl"
              }
            }
          },
          {
            "1": "cross_align",
            "2": {
              "6": {
                "1": "stretch"
              }
            }
          }
        ],
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "logo_icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "11": {
                            "1": "leaf"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 32
                          }
                        }
                      }
                    ],
                    "5": "4ba62a51-d8dc-4206-b2cc-a3675387a3ce"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Skip"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "4dc7c3a4-ea6f-47ba-9a0e-ca68152fda3c"
                  }
                ],
                "5": "0426d3c7-df0b-4e5f-bd3d-3a295d0c2adf"
              },
              {
                "1": "sizedbox",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  }
                ],
                "5": "ebed8490-23cc-4410-9065-37aab0d47f51"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Welcome to Bloom & Root"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "headline_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 700
                      }
                    }
                  },
                  {
                    "1": "line_height",
                    "2": {
                      "10": {
                        "1": 1.2
                      }
                    }
                  }
                ],
                "5": "686a4637-c4a8-458b-a1c7-54c782957c23"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Every journey is unique. Tell us where you are today so we can nurture your path."
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "body_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  }
                ],
                "5": "71d03994-de16-4432-9042-2a922d082848"
              }
            ],
            "5": "dccb7602-a2b8-4b9d-b9f6-81046c420dc1"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 0
                  }
                }
              }
            ],
            "3": [
              {
                "1": "@stage_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Fertility"
                      }
                    }
                  },
                  {
                    "1": "description",
                    "2": {
                      "7": {
                        "1": "Nurturing your body and mind as you prepare for conception."
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "soft hand drawn illustration of a seedling sprouting"
                      }
                    }
                  },
                  {
                    "1": "circle_bg",
                    "2": {
                      "4": {
                        "1": "#FDF2F2"
                      }
                    }
                  }
                ],
                "5": "28acbb57-7be5-4c34-9f51-94c1f511607c"
              },
              {
                "1": "@stage_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Prenatal"
                      }
                    }
                  },
                  {
                    "1": "description",
                    "2": {
                      "7": {
                        "1": "Gentle support and strength through every trimester of pregnancy."
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "soft hand drawn illustration of a blooming flower"
                      }
                    }
                  },
                  {
                    "1": "circle_bg",
                    "2": {
                      "4": {
                        "1": "#F2F7F2"
                      }
                    }
                  }
                ],
                "5": "b0e0f638-57c8-40e8-8ac7-98b615f38cd0"
              },
              {
                "1": "@stage_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Postnatal"
                      }
                    }
                  },
                  {
                    "1": "description",
                    "2": {
                      "7": {
                        "1": "Healing and recovery as you navigate the fourth trimester and beyond."
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "soft hand drawn illustration of a watering can and roots"
                      }
                    }
                  },
                  {
                    "1": "circle_bg",
                    "2": {
                      "4": {
                        "1": "#F2F5FF"
                      }
                    }
                  }
                ],
                "5": "1fb26079-b650-4c3b-b032-e50e728a41c3"
              }
            ],
            "5": "0db9b786-cba8-424a-a4da-e9d331a30143"
          },
          {
            "1": "stack",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 200,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 150,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#E8DCC4"
                      }
                    }
                  },
                  {
                    "1": "opacity",
                    "2": {
                      "10": {
                        "1": 0.3
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 100,
                        "2": 60,
                        "3": 120,
                        "4": 40
                      }
                    }
                  },
                  {
                    "1": "margin",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 40
                      }
                    }
                  }
                ],
                "5": "d7877b24-ad1b-4ada-8945-252fe529a602"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "lg"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "sm"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "width",
                            "2": {
                              "1": {
                                "1": 24,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "height",
                            "2": {
                              "1": {
                                "1": 6,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "full"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "primary"
                              }
                            }
                          }
                        ],
                        "5": "236a4a8d-dded-462e-8305-f870f75db15e"
                      },
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "width",
                            "2": {
                              "1": {
                                "1": 8,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "height",
                            "2": {
                              "1": {
                                "1": 6,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "full"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "divider"
                              }
                            }
                          }
                        ],
                        "5": "5bd6ed8a-6d50-43ad-b770-5ada0aa6cad4"
                      },
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "width",
                            "2": {
                              "1": {
                                "1": 8,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "height",
                            "2": {
                              "1": {
                                "1": 6,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "full"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "divider"
                              }
                            }
                          }
                        ],
                        "5": "4401388c-53a5-4ac6-93d3-02341a7d4564"
                      }
                    ],
                    "5": "82a2e8f0-3683-450e-ac6a-28462ce89c2c"
                  },
                  {
                    "1": "button",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Continue Journey"
                          }
                        }
                      },
                      {
                        "1": "variant",
                        "2": {
                          "7": {
                            "1": "filled"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "on_primary"
                          }
                        }
                      },
                      {
                        "1": "font_size",
                        "2": {
                          "10": {
                            "1": 16
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      },
                      {
                        "1": "content_padding",
                        "2": {
                          "5": {
                            "1": 32,
                            "2": 18,
                            "3": 32,
                            "4": 18
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 30,
                            "2": 30,
                            "3": 30,
                            "4": 30
                          }
                        }
                      },
                      {
                        "1": "full_width",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "5": "e149af80-0fd4-4b58-b0a2-8034bd26fe2b"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "By continuing, you agree to our Terms of Service"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_small"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "hint"
                          }
                        }
                      },
                      {
                        "1": "text_align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "5": "7570fca8-37a2-4eae-b42a-9b0a51e01cb4"
                  }
                ],
                "5": "ab5ae321-2b9f-46b7-b5bd-b37a0acd05d9"
              }
            ],
            "5": "73cd185d-44c6-40aa-ba4d-2211289a9ee9"
          },
          {
            "1": "sizedbox",
            "2": [
              {
                "1": "height",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "5": "d5b1c1e6-1fbc-40c2-8479-5e16f8651576"
          }
        ],
        "5": "5ce0bf87-298f-4a8b-bcdd-f14952f9e0bc"
      }
    ],
    "5": "3cac7d0d-28e4-4b91-a394-d37550f33c74"
  },
  "2": [
    {
      "1": "stage_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 40,
                "2": 100,
                "3": 60,
                "4": 80
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "lg"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "22": {
                "1": 1,
                "2": "divider"
              }
            }
          },
          {
            "1": "clip",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 20
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 40,
                        "2": 40,
                        "3": 40,
                        "4": 40
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "17": {
                        "1": "circle_bg"
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "image",
                    "2": [
                      {
                        "1": "source_desc",
                        "2": {
                          "17": {
                            "1": "img_desc"
                          }
                        }
                      },
                      {
                        "1": "fit",
                        "2": {
                          "7": {
                            "1": "contain"
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 60,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 60,
                            "2": false
                          }
                        }
                      }
                    ],
                    "5": "6fe5324d-7f57-4c0d-a930-34bbf90dd568"
                  }
                ],
                "5": "d2352775-c28b-4b56-8c01-82c2169b7db0"
              },
              {
                "1": "expanded",
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "title"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_large"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          }
                        ],
                        "5": "3e0aa683-9aee-42d6-8d3a-9db732eda0ee"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "description"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          },
                          {
                            "1": "max_lines",
                            "2": {
                              "10": {
                                "1": 2
                              }
                            }
                          },
                          {
                            "1": "overflow",
                            "2": {
                              "7": {
                                "1": "ellipsis"
                              }
                            }
                          }
                        ],
                        "5": "bbb68379-32a6-4637-80de-672c7fb0ed2f"
                      }
                    ],
                    "5": "30a3a495-54a0-41dd-a880-877eb775bf59"
                  }
                ],
                "5": "e6860f9b-cd5a-4604-abe7-d5939374111a"
              },
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "11": {
                        "1": "chevron_right_rounded"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 24
                      }
                    }
                  }
                ],
                "5": "6fda7aa0-f35d-4138-b563-464deb74b7d0"
              }
            ],
            "5": "f19c8155-c02e-43d0-85ae-194819cec539"
          }
        ],
        "5": "8350f24c-a327-4c59-9647-a93935740b2b"
      }
    }
  ]
}
```

### 2. User Profile

- Frame ID: `6148ce02-ed5d-4b82-b799-4091d31c740f`
- Original page prompt: "User settings and personal health profile"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "#FAF7F2"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xl"
              }
            }
          }
        ],
        "3": [
          {
            "1": "stack",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 280,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 200,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#E8DCC4"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 80,
                        "2": 120,
                        "3": 90,
                        "4": 140
                      }
                    }
                  },
                  {
                    "1": "opacity",
                    "2": {
                      "10": {
                        "1": 0.4
                      }
                    }
                  },
                  {
                    "1": "margin",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 40,
                        "4": 0
                      }
                    }
                  }
                ],
                "5": "7bcc2c46-015f-4c15-9862-dad1cda441a2"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 6,
                            "2": 6,
                            "3": 6,
                            "4": 6
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#FAF7F2"
                          }
                        }
                      },
                      {
                        "1": "shape",
                        "2": {
                          "7": {
                            "1": "circle"
                          }
                        }
                      },
                      {
                        "1": "shadow",
                        "2": {
                          "7": {
                            "1": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "avatar",
                        "2": [
                          {
                            "1": "source_desc",
                            "2": {
                              "12": {
                                "1": 3,
                                "2": "serene woman smiling gently, natural lighting"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 100
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "full"
                              }
                            }
                          }
                        ],
                        "5": "42bd00b1-72a5-421f-82d3-6be896cfad17"
                      }
                    ],
                    "5": "710e27f7-0157-4950-a01e-ed4ed35240ae"
                  },
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      },
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Elena Rose"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "headline_medium"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "0918178f-7469-4711-960a-5610fbe0c7b8"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Postnatal Journey • Week 12"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#A8B5A0"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          }
                        ],
                        "5": "e967e46b-05fd-4df5-ab42-5b2a0bff0b16"
                      }
                    ],
                    "5": "aa1d1571-1367-423a-ada3-77225a72bf60"
                  }
                ],
                "5": "cd4f2449-1064-467a-b391-d89aba3dedf2"
              }
            ],
            "5": "f1c21739-c56e-4c52-96ec-7f4c0f5888de"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "surface"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 32,
                    "2": 32,
                    "3": 32,
                    "4": 32
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": "lg"
                  }
                }
              },
              {
                "1": "shadow",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_around"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@profile_stat",
                    "2": [
                      {
                        "1": "value",
                        "2": {
                          "7": {
                            "1": "84"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Mindful Days"
                          }
                        }
                      }
                    ],
                    "5": "7da86f66-ccc7-4384-90fe-3e7300755c66"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 1,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 30,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "divider"
                          }
                        }
                      }
                    ],
                    "5": "fa25680c-7ca3-4cdb-881a-2401562f722e"
                  },
                  {
                    "1": "@profile_stat",
                    "2": [
                      {
                        "1": "value",
                        "2": {
                          "7": {
                            "1": "12h"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Yoga Flow"
                          }
                        }
                      }
                    ],
                    "5": "ca0ab4a6-784d-4dc0-bfb0-05081d46b945"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 1,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 30,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "divider"
                          }
                        }
                      }
                    ],
                    "5": "6dfc7a55-b5f2-47a2-bad6-31a9654781f4"
                  },
                  {
                    "1": "@profile_stat",
                    "2": [
                      {
                        "1": "value",
                        "2": {
                          "7": {
                            "1": "1.2k"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Points"
                          }
                        }
                      }
                    ],
                    "5": "a013785f-e90c-4cc1-8183-59399021da16"
                  }
                ],
                "5": "f3bfc2e3-04a3-43b0-934f-d22081c1fc8a"
              }
            ],
            "5": "08d2c819-cf88-4e18-9849-ecfa68a09c87"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Health Profile"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_large"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "e74d06d9-8d2b-4c30-ae9d-7919519887be"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Edit Info"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "#A8B5A0"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      }
                    ],
                    "5": "fa23f686-6d80-4655-901c-f873fce66aee"
                  }
                ],
                "5": "fcdd70ce-7248-4bc0-a1d3-0dbbee0b6071"
              },
              {
                "1": "wrap",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "sm"
                      }
                    }
                  },
                  {
                    "1": "run_spacing",
                    "2": {
                      "7": {
                        "1": "sm"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@health_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "favorite_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Postnatal"
                          }
                        }
                      }
                    ],
                    "5": "356c64bb-2eda-46b1-94f5-9c559aba75c3"
                  },
                  {
                    "1": "@health_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "self_improvement_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Low Impact"
                          }
                        }
                      }
                    ],
                    "5": "b223b7bd-5ca8-4561-9b6c-91b89e41edad"
                  },
                  {
                    "1": "@health_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "water_drop_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Hydration Focus"
                          }
                        }
                      }
                    ],
                    "5": "58ffd36b-02e6-425d-b22b-3e3f3f3563f9"
                  },
                  {
                    "1": "@health_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "nightlight_round"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Sleep Sync"
                          }
                        }
                      }
                    ],
                    "5": "dcd63668-463e-4fe5-ad98-9c965d30634e"
                  }
                ],
                "5": "fd0d26ae-a4b5-4122-a150-5319831c2da5"
              }
            ],
            "5": "167de880-31e2-40af-9007-b75498443191"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Preferences"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_medium"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 700
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "margin",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 4,
                        "4": 0
                      }
                    }
                  }
                ],
                "5": "2322b377-fb85-4875-ba6c-f3b54a2922b9"
              },
              {
                "1": "@setting_tile",
                "2": [
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "notifications_none_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#F2E8E8"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#D4A5A5"
                      }
                    }
                  },
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Reminders"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Daily meditation & hydration alerts"
                      }
                    }
                  }
                ],
                "5": "7fb7ec42-141a-435e-a0fb-1383463bc712"
              },
              {
                "1": "@setting_tile",
                "2": [
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "auto_awesome_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#EBF0E9"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#A8B5A0"
                      }
                    }
                  },
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Personalization"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Tailor your recovery plan"
                      }
                    }
                  }
                ],
                "5": "436fbb83-213c-4607-8197-7747d8bafae0"
              },
              {
                "1": "@setting_tile",
                "2": [
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "lock_outline_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#F4EFE6"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#C4A484"
                      }
                    }
                  },
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Privacy & Data"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Manage your health records"
                      }
                    }
                  }
                ],
                "5": "c163f65c-7ed2-40da-9ddb-76aa003889de"
              },
              {
                "1": "@setting_tile",
                "2": [
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "people_outline_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#E8F1F2"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#8FB8BD"
                      }
                    }
                  },
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Community"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Profile visibility & connections"
                      }
                    }
                  }
                ],
                "5": "4c5c9506-5232-4823-9d45-954bc6da5eca"
              }
            ],
            "5": "1074b441-fa1e-4610-80f1-af88679e6c9e"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 12,
                    "2": 0,
                    "3": 12,
                    "4": 0
                  }
                }
              }
            ],
            "3": [
              {
                "1": "button",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Contact Expert Support"
                      }
                    }
                  },
                  {
                    "1": "variant",
                    "2": {
                      "7": {
                        "1": "tonal"
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#E8DCC4"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "full_width",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 24,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  },
                  {
                    "1": "content_padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "6": "lg",
                        "7": "md",
                        "8": "lg",
                        "9": "md"
                      }
                    }
                  }
                ],
                "5": "afda83eb-b2b4-4044-9bfb-144c8b876259"
              },
              {
                "1": "button",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Sign Out"
                      }
                    }
                  },
                  {
                    "1": "variant",
                    "2": {
                      "7": {
                        "1": "text"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "#D4A5A5"
                      }
                    }
                  },
                  {
                    "1": "font_size",
                    "2": {
                      "10": {
                        "1": 14
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 600
                      }
                    }
                  }
                ],
                "5": "9289091a-8373-4a51-91ae-00bdebc6d819"
              }
            ],
            "5": "7c006fe4-58f8-4503-87b3-229ec5d4e4ff"
          },
          {
            "1": "center",
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "xs"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "logo_icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "11": {
                            "1": "leaf"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "#A8B5A0"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 32
                          }
                        }
                      },
                      {
                        "1": "opacity",
                        "2": {
                          "10": {
                            "1": 0.5
                          }
                        }
                      }
                    ],
                    "5": "bcec4695-2305-472d-9c5a-4966d67fac99"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Version 2.4.0"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_small"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "hint"
                          }
                        }
                      }
                    ],
                    "5": "016e1eff-e361-48b5-9e58-c40443f018ff"
                  },
                  {
                    "1": "sizedbox",
                    "2": [
                      {
                        "1": "height",
                        "2": {
                          "7": {
                            "1": "lg"
                          }
                        }
                      }
                    ],
                    "5": "b5167014-9f2d-4047-b31c-fc2ade44358c"
                  }
                ],
                "5": "1547e39e-6a53-4553-994b-a58a1735b10d"
              }
            ],
            "5": "64e8eb0b-887e-4a2e-83c3-8d76b1e89a08"
          }
        ],
        "5": "edd80e38-75ad-41c3-bcd6-13dcc5120d83"
      }
    ],
    "5": "f6142650-06d0-4893-9047-bbf6f72f6061"
  },
  "2": [
    {
      "1": "profile_stat",
      "2": {
        "1": "column",
        "2": [
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xs"
              }
            }
          },
          {
            "1": "expanded",
            "2": {
              "20": {
                "1": true,
                "2": 1
              }
            }
          }
        ],
        "3": [
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "value"
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "title_medium"
                  }
                }
              },
              {
                "1": "font_weight",
                "2": {
                  "10": {
                    "1": 700
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "4": {
                    "1": "primary_text"
                  }
                }
              }
            ],
            "5": "86d6ce41-2cce-46a5-b6b6-bbb4ee593b67"
          },
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "label"
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "label_small"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "4": {
                    "1": "secondary_text"
                  }
                }
              }
            ],
            "5": "34022e63-4bdf-43f6-b284-02ff6f4b032b"
          }
        ],
        "5": "4e756b84-f30b-4727-8d9d-d4b225a2275f"
      }
    },
    {
      "1": "setting_tile",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "xl"
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "md",
                "7": "lg",
                "8": "md",
                "9": "lg"
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "sm"
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 44,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 44,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "17": {
                        "1": "icon_bg"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 16,
                        "2": 16,
                        "3": 16,
                        "4": 16
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "17": {
                            "1": "icon"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "17": {
                            "1": "icon_color"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 22
                          }
                        }
                      }
                    ],
                    "5": "0c917ad7-84b8-45ce-a011-151713ecae21"
                  }
                ],
                "5": "aec98f6c-ba19-4a72-a970-aff3f8f5771c"
              },
              {
                "1": "expanded",
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 2
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "title"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_large"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "8805306e-a44c-4e36-b11b-443335b59c83"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "subtitle"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          },
                          {
                            "1": "max_lines",
                            "2": {
                              "10": {
                                "1": 1
                              }
                            }
                          },
                          {
                            "1": "overflow",
                            "2": {
                              "7": {
                                "1": "ellipsis"
                              }
                            }
                          }
                        ],
                        "5": "434ae7f8-840e-477a-828a-63af118c85de"
                      }
                    ],
                    "5": "ced81556-ddc6-4419-92de-f6bd8d9c044e"
                  }
                ],
                "5": "488c979f-619b-4f0c-b39d-842eafe1d001"
              },
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "11": {
                        "1": "chevron_right_rounded"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "hint"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 20
                      }
                    }
                  }
                ],
                "5": "1701e0ab-92fa-4ac8-b452-603f9080db05"
              }
            ],
            "5": "b25f3bd5-5e74-48ae-b94b-ecb756c2f4d9"
          }
        ],
        "5": "b9257264-c758-40f1-9b1b-8bcb6ee85be1"
      }
    },
    {
      "1": "health_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "#F4EFE6"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "sm",
                "7": "md",
                "8": "sm",
                "9": "md"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "22": {
                "1": 1,
                "2": "#E8DCC4"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "main_size",
                "2": {
                  "7": {
                    "1": "min"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "xs"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "17": {
                        "1": "icon"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 14
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "#A8B5A0"
                      }
                    }
                  }
                ],
                "5": "10bcfc8f-6480-482e-b6fd-03ca09f6854a"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "label_medium"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 500
                      }
                    }
                  }
                ],
                "5": "53509e98-2380-4661-86f1-c9cf2935b30b"
              }
            ],
            "5": "d0718a59-875f-4fa3-8a6b-06be24ab4004"
          }
        ],
        "5": "d9c6968c-e323-4898-938f-02cdcd08070c"
      }
    }
  ]
}
```

### 3. Health Tracker

- Frame ID: `f3ddf88b-0f40-4559-a7c4-57eed715eb88`
- Original page prompt: "A log for physical symptoms, mood, and recovery milestones"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "#FAF7F2"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xl"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "space_between"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 4
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Daily Check-in"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "headline_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      }
                    ],
                    "5": "c885dbb8-d56d-4aa5-b89a-5b7584066e8a"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "How are you feeling, Sarah?"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "0fb35d9a-68bd-4e71-a705-bdb5e050caf7"
                  }
                ],
                "5": "2f184c4a-099c-4a50-acf3-8741b500c7bb"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 24,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  },
                  {
                    "1": "clip",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 1,
                        "2": "divider"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "image",
                    "2": [
                      {
                        "1": "source_desc",
                        "2": {
                          "12": {
                            "1": 3,
                            "2": "soft minimalist portrait of a woman smiling gently"
                          }
                        }
                      },
                      {
                        "1": "fit",
                        "2": {
                          "7": {
                            "1": "cover"
                          }
                        }
                      }
                    ],
                    "5": "fb238d2b-82e6-4864-841d-bd11a9aa0db4"
                  }
                ],
                "5": "7a37b91d-e193-4197-815e-12dcbab67879"
              }
            ],
            "5": "0e0ed7dc-061b-41cf-b0e7-f41ebbd37f10"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Current Mood"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 600
                      }
                    }
                  }
                ],
                "5": "2286c287-ef85-4017-baae-c63e0bb4a496"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@mood_selector",
                    "2": [
                      {
                        "1": "emoji",
                        "2": {
                          "7": {
                            "1": "✨"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Radiant"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "ef761015-0dd5-453d-b385-cb22302fb2d9"
                  },
                  {
                    "1": "@mood_selector",
                    "2": [
                      {
                        "1": "emoji",
                        "2": {
                          "7": {
                            "1": "🌱"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Growing"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "5": "fe0075c8-af68-4dae-8c21-2d110bdb703d"
                  },
                  {
                    "1": "@mood_selector",
                    "2": [
                      {
                        "1": "emoji",
                        "2": {
                          "7": {
                            "1": "☁️"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Tired"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "ec20d3c8-54bb-49e8-8030-b6066751fa84"
                  },
                  {
                    "1": "@mood_selector",
                    "2": [
                      {
                        "1": "emoji",
                        "2": {
                          "7": {
                            "1": "🌊"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Calm"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "81d0acc4-330a-4556-955d-dbaffb1bc651"
                  },
                  {
                    "1": "@mood_selector",
                    "2": [
                      {
                        "1": "emoji",
                        "2": {
                          "7": {
                            "1": "🌙"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Resting"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "80e674f0-4d1d-43ca-9c46-19f292bc5223"
                  }
                ],
                "5": "eaa6ddce-66a7-492a-9d92-1a1fda627eb6"
              }
            ],
            "5": "aa4cc39e-4cbf-4989-8e73-c14382173812"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Physical Symptoms"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      }
                    ],
                    "5": "db5ad45f-e845-4591-908b-7ba888a13718"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "See trends"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      }
                    ],
                    "5": "58c599ec-775a-4cb8-863f-5ab1a1221995"
                  }
                ],
                "5": "d088f54a-a945-44a6-806c-11ca18d002f0"
              },
              {
                "1": "wrap",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 8
                      }
                    }
                  },
                  {
                    "1": "run_spacing",
                    "2": {
                      "10": {
                        "1": 8
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@symptom_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "water_drop_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Hydrated"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "5": "0585bfcc-23ee-437a-a30e-750b172a9875"
                  },
                  {
                    "1": "@symptom_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "fitness_center_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Mild Ache"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "f278d3fd-a779-404a-883c-5bce5142096f"
                  },
                  {
                    "1": "@symptom_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "self_improvement_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Flexible"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "5": "3cd2c93a-0c08-45ed-bcea-2f27def4a84c"
                  },
                  {
                    "1": "@symptom_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "bed_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Deep Sleep"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "1b6e1bac-6aef-4bbc-b93c-4074840eb021"
                  },
                  {
                    "1": "@symptom_chip",
                    "2": [
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "energy_savings_leaf_rounded"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "High Energy"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "cbd39520-7317-4cee-a326-aa9f89b3f3b7"
                  }
                ],
                "5": "351e592f-fa08-4ad8-9f72-be58ac8e04b4"
              }
            ],
            "5": "e14e7a92-1caf-47fc-912b-67209bc6b691"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "surface"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 32,
                    "2": 32,
                    "3": 32,
                    "4": 32
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": "xl"
                  }
                }
              },
              {
                "1": "shadow",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                }
              },
              {
                "1": "border",
                "2": {
                  "22": {
                    "1": 1,
                    "2": "divider"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "lg"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "space_between"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Recovery Flow"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "title_medium"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 600
                                  }
                                }
                              }
                            ],
                            "5": "ac248c73-def8-4433-83d4-141254bd6784"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Last 7 days"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "body_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              }
                            ],
                            "5": "d236f305-2623-4daa-8f2c-08ec9fabd71a"
                          }
                        ],
                        "5": "3023292b-cab1-498b-b6e5-2b87b286628e"
                      },
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#E8DCC4"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 12,
                                "2": 12,
                                "3": 12,
                                "4": 12
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "6": "sm",
                                "7": "md",
                                "8": "sm",
                                "9": "md"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "+12%"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_small"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              }
                            ],
                            "5": "cdb91ff1-9844-4da9-a625-3741fea823f4"
                          }
                        ],
                        "5": "b98ad9b3-92d8-4376-ac6b-9b6745c26de4"
                      }
                    ],
                    "5": "de23acaf-5014-4eb3-a153-b16b6eb1f090"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 180,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": "Infinity",
                            "2": true
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "line_chart",
                        "2": [
                          {
                            "1": "data",
                            "2": {
                              "7": {
                                "1": "30,45,40,65,70,85,80"
                              }
                            }
                          },
                          {
                            "1": "labels",
                            "2": {
                              "7": {
                                "1": "M,T,W,T,F,S,S"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary"
                              }
                            }
                          },
                          {
                            "1": "curved",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          },
                          {
                            "1": "filled",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          },
                          {
                            "1": "fill_opacity",
                            "2": {
                              "10": {
                                "1": 0.1
                              }
                            }
                          },
                          {
                            "1": "line_width",
                            "2": {
                              "10": {
                                "1": 3
                              }
                            }
                          },
                          {
                            "1": "show_dots",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          }
                        ],
                        "5": "80846460-075f-4f34-bc54-831fb474f407"
                      }
                    ],
                    "5": "a62c5c42-bb74-417c-baee-965e8e1bd100"
                  }
                ],
                "5": "d4ae45a4-0138-4417-92e2-40c4d63edf4d"
              }
            ],
            "5": "b7543930-9b44-438c-a13f-8b0b5cbaee6c"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Recovery Milestones"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 600
                      }
                    }
                  }
                ],
                "5": "ca2f0cc4-28ed-41b3-98ae-bc8deffd0d72"
              },
              {
                "1": "@recovery_milestone",
                "2": [
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "favorite_rounded"
                      }
                    }
                  },
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Pelvic Floor Health"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Completed 5-day streak of gentle exercises"
                      }
                    }
                  }
                ],
                "5": "480951cd-18bd-4f5e-89c1-7abbda3f7bdf"
              },
              {
                "1": "@recovery_milestone",
                "2": [
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "auto_awesome_rounded"
                      }
                    }
                  },
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "First Postnatal Yoga"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Gentle movement session focused on breath"
                      }
                    }
                  }
                ],
                "5": "96c97fb2-fbb3-4d6e-8d4d-90739a593985"
              }
            ],
            "5": "8863b2cb-2ed4-4302-ad5f-cb4fc4f0c8e2"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Notes & Reflections"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 600
                      }
                    }
                  }
                ],
                "5": "681b0331-050e-42bb-a7ec-28f864ebfd7e"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 20,
                        "2": 20,
                        "3": 20,
                        "4": 20
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "md"
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 1,
                        "2": "divider"
                      }
                    }
                  },
                  {
                    "1": "min_height",
                    "2": {
                      "1": {
                        "1": 120,
                        "2": false
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "textfield",
                    "2": [
                      {
                        "1": "hint",
                        "2": {
                          "7": {
                            "1": "How was your movement today? Any specific sensations..."
                          }
                        }
                      },
                      {
                        "1": "max_lines",
                        "2": {
                          "10": {
                            "1": 4
                          }
                        }
                      },
                      {
                        "1": "filled",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "0875ed66-6729-4216-8cd8-8c8e0d673a0d"
                  }
                ],
                "5": "1326cc04-778c-476e-b5e6-f9cef922f50b"
              }
            ],
            "5": "9d199005-8282-4594-9328-dca0c761ae16"
          },
          {
            "1": "button",
            "2": [
              {
                "1": "content",
                "2": {
                  "7": {
                    "1": "Save Daily Log"
                  }
                }
              },
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "4": {
                    "1": "on_primary"
                  }
                }
              },
              {
                "1": "full_width",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 24,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              },
              {
                "1": "content_padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": "lg"
                  }
                }
              },
              {
                "1": "font_size",
                "2": {
                  "10": {
                    "1": 16
                  }
                }
              },
              {
                "1": "font_weight",
                "2": {
                  "10": {
                    "1": 600
                  }
                }
              }
            ],
            "5": "0ca7b15c-d728-45be-b131-e62f4eea6ef5"
          },
          {
            "1": "sizedbox",
            "2": [
              {
                "1": "height",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "5": "186ac1be-a527-4b0b-9fe5-8019fb25660f"
          }
        ],
        "5": "d9e675c1-75d2-498e-b4c9-82597c41b975"
      }
    ],
    "5": "9136381b-c07c-45d2-8361-cfd93379071c"
  },
  "2": [
    {
      "1": "symptom_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                },
                "3": {
                  "4": {
                    "1": "surface"
                  }
                }
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "md",
                "7": "lg",
                "8": "md",
                "9": "lg"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "23": {
                "1": 1,
                "2": {
                  "1": "selected",
                  "2": {
                    "7": {
                      "1": "primary"
                    }
                  },
                  "3": {
                    "7": {
                      "1": "divider"
                    }
                  }
                }
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "7": "sm",
                "8": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 8
                  }
                }
              },
              {
                "1": "main_size",
                "2": {
                  "7": {
                    "1": "min"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "17": {
                        "1": "icon"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 18
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "4": {
                            "1": "on_primary"
                          }
                        },
                        "3": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    }
                  }
                ],
                "5": "db8321d4-7658-4ee8-a666-f169cfaf2a36"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "4": {
                            "1": "on_primary"
                          }
                        },
                        "3": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "label_large"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 500
                      }
                    }
                  }
                ],
                "5": "4c733383-57ee-40d7-b904-080935f8b64b"
              }
            ],
            "5": "39ec758c-fae3-48bf-9c48-8abdc96aeab9"
          }
        ],
        "5": "cc75b9f9-288b-4194-bc84-ad805b32d56e"
      }
    },
    {
      "1": "recovery_milestone",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "lg"
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "md"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "22": {
                "1": 1,
                "2": "divider"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#F3E9D2"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 16,
                        "2": 16,
                        "3": 16,
                        "4": 16
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "17": {
                            "1": "icon"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "#A8B5A0"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 24
                          }
                        }
                      }
                    ],
                    "5": "6447d97e-26d0-4e95-ab44-ee18391c9076"
                  }
                ],
                "5": "a933941c-3eee-4b27-ab09-0f5202b3fbbc"
              },
              {
                "1": "expanded",
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "title"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          }
                        ],
                        "5": "a85d4fd4-ad60-45d9-b331-626b18dde9b1"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "subtitle"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "eb9d6ad8-0142-418e-b770-1655518a5cf4"
                      }
                    ],
                    "5": "e872c463-53e7-4d9f-b037-908117849499"
                  }
                ],
                "5": "514ff6b1-5000-42f3-ba8d-9035ecb68f0b"
              },
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "11": {
                        "1": "check_circle_outline_rounded"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "success"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 24
                      }
                    }
                  }
                ],
                "5": "9dda9392-ca01-474e-8f59-c4290d0a5f15"
              }
            ],
            "5": "dfe29626-8c44-469c-8f24-7a21e166b383"
          }
        ],
        "5": "d457343a-e3d1-415d-9f35-0071e91bb142"
      }
    },
    {
      "1": "mood_selector",
      "2": {
        "1": "column",
        "2": [
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xs"
              }
            }
          }
        ],
        "3": [
          {
            "1": "container",
            "2": [
              {
                "1": "width",
                "2": {
                  "1": {
                    "1": 56,
                    "2": false
                  }
                }
              },
              {
                "1": "height",
                "2": {
                  "1": {
                    "1": 56,
                    "2": false
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 28,
                    "2": 28,
                    "3": 28,
                    "4": 28
                  }
                }
              },
              {
                "1": "bg",
                "2": {
                  "18": {
                    "1": "selected",
                    "2": {
                      "4": {
                        "1": "primary"
                      }
                    },
                    "3": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  }
                }
              },
              {
                "1": "border",
                "2": {
                  "23": {
                    "1": 1,
                    "2": {
                      "1": "selected",
                      "2": {
                        "7": {
                          "1": "primary"
                        }
                      },
                      "3": {
                        "7": {
                          "1": "divider"
                        }
                      }
                    }
                  }
                }
              },
              {
                "1": "align_child",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "emoji"
                      }
                    }
                  },
                  {
                    "1": "font_size",
                    "2": {
                      "10": {
                        "1": 24
                      }
                    }
                  }
                ],
                "5": "dd1bb675-6c69-4b77-8983-a4a5670f452f"
              }
            ],
            "5": "12f7301d-8516-45cd-b4a2-98efd04c3549"
          },
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "label"
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "label_small"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "18": {
                    "1": "selected",
                    "2": {
                      "4": {
                        "1": "primary"
                      }
                    },
                    "3": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  }
                }
              },
              {
                "1": "font_weight",
                "2": {
                  "18": {
                    "1": "selected",
                    "2": {
                      "10": {
                        "1": 600
                      }
                    },
                    "3": {
                      "10": {
                        "1": 400
                      }
                    }
                  }
                }
              }
            ],
            "5": "35a1d05e-ac12-428b-bc2a-952ca97fdeaa"
          }
        ],
        "5": "0c958276-8fb9-48c6-94e3-6207744c0cfd"
      }
    }
  ]
}
```

### 4. Yoga Library

- Frame ID: `18ae5962-fdae-4c19-bf5f-4c7d55fb2f6c`
- Original page prompt: "A collection of guided yoga sessions categorized by trimester and recovery stage"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "cross_align",
            "2": {
              "6": {
                "1": "stretch"
              }
            }
          }
        ],
        "3": [
          {
            "1": "container",
            "2": [
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 32,
                    "2": 24,
                    "3": 12,
                    "4": 24
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "sm"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "space_between"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          },
                          {
                            "1": "spacing",
                            "2": {
                              "10": {
                                "1": 4
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Yoga Library"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "headline_medium"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 800
                                  }
                                }
                              }
                            ],
                            "5": "0b6d036b-c08d-4534-af32-6dff32abccd9"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Find your flow for today"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "body_medium"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              }
                            ],
                            "5": "b14e9122-711e-4cb0-9e3d-895b166d2525"
                          }
                        ],
                        "5": "b1a56b75-53ba-4530-bf5e-17c4b3f4adf4"
                      },
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "width",
                            "2": {
                              "1": {
                                "1": 48,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "height",
                            "2": {
                              "1": {
                                "1": 48,
                                "2": false
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 24,
                                "2": 24,
                                "3": 24,
                                "4": 24
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "surface"
                              }
                            }
                          },
                          {
                            "1": "border",
                            "2": {
                              "22": {
                                "1": 1,
                                "2": "divider"
                              }
                            }
                          },
                          {
                            "1": "align_child",
                            "2": {
                              "6": {
                                "1": "center"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "search_rounded"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "10": {
                                    "1": 24
                                  }
                                }
                              }
                            ],
                            "5": "ad88687c-439a-4ac0-9a7d-0a17df0915cb"
                          }
                        ],
                        "5": "2380a444-fe70-4aa6-b2f7-74c46f05ccd6"
                      }
                    ],
                    "5": "88cc1c5d-f303-44d1-b246-71dbe447c4a7"
                  }
                ],
                "5": "e6867811-6904-44cd-9605-e247739fcc11"
              }
            ],
            "5": "ce78ee27-9ae0-4b96-8130-19ad476edc04"
          },
          {
            "1": "stack",
            "2": [
              {
                "1": "height",
                "2": {
                  "1": {
                    "1": 60,
                    "2": false
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 120,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 120,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#A8B5A033"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 60,
                        "2": 60,
                        "3": 60,
                        "4": 60
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "2": {
                          "1": -1.2,
                          "2": 0
                        }
                      }
                    }
                  }
                ],
                "5": "75827023-25b6-4106-88cc-3277e505c96d"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#D4A5A522"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 40,
                        "2": 40,
                        "3": 40,
                        "4": 40
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "2": {
                          "1": 1.1,
                          "2": 1.5
                        }
                      }
                    }
                  }
                ],
                "5": "37caa7b7-0de0-4886-8af7-c18e1067a92a"
              }
            ],
            "5": "f9470ea4-cb48-4d90-a353-f248eb890c0f"
          },
          {
            "1": "row",
            "2": [
              {
                "1": "scroll",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              }
            ],
            "3": [
              {
                "1": "@category_chip",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "All Stages"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "all_inclusive_rounded"
                      }
                    }
                  },
                  {
                    "1": "selected",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  }
                ],
                "5": "767f95b2-3112-4a56-af11-df39d66d4991"
              },
              {
                "1": "@category_chip",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Trimester 1"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "spa_rounded"
                      }
                    }
                  },
                  {
                    "1": "selected",
                    "2": {
                      "9": {
                        "1": false
                      }
                    }
                  }
                ],
                "5": "be62290e-5e2f-475f-a46a-388d75724245"
              },
              {
                "1": "@category_chip",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Trimester 2"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "favorite_rounded"
                      }
                    }
                  },
                  {
                    "1": "selected",
                    "2": {
                      "9": {
                        "1": false
                      }
                    }
                  }
                ],
                "5": "d90f32b5-f8b5-4828-8b08-03ae112d4a3c"
              },
              {
                "1": "@category_chip",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Trimester 3"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "pregnant_woman_rounded"
                      }
                    }
                  },
                  {
                    "1": "selected",
                    "2": {
                      "9": {
                        "1": false
                      }
                    }
                  }
                ],
                "5": "282a5181-8593-436a-bf18-cf1918bb1072"
              },
              {
                "1": "@category_chip",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Postnatal"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "child_care_rounded"
                      }
                    }
                  },
                  {
                    "1": "selected",
                    "2": {
                      "9": {
                        "1": false
                      }
                    }
                  }
                ],
                "5": "0c5d2617-b210-482c-8f52-8747c643e2a0"
              }
            ],
            "5": "ec42f7ca-2ced-4f43-9d9b-6a23d55d1da7"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 24,
                    "3": 0,
                    "4": 24
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Recommended for You"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      }
                    ],
                    "5": "5579e442-272f-48b8-8ae5-a40cf9f8f260"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "See All"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      }
                    ],
                    "5": "75f352a8-ef9b-40b0-acd5-1b62b4b20546"
                  }
                ],
                "5": "a5f26ed3-db1f-477b-883c-41e31aeeda2c"
              },
              {
                "1": "@session_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Morning Energy Flow"
                      }
                    }
                  },
                  {
                    "1": "instructor",
                    "2": {
                      "7": {
                        "1": "with Sarah Jenkins"
                      }
                    }
                  },
                  {
                    "1": "duration",
                    "2": {
                      "7": {
                        "1": "20 min"
                      }
                    }
                  },
                  {
                    "1": "level",
                    "2": {
                      "7": {
                        "1": "Beginner"
                      }
                    }
                  },
                  {
                    "1": "type",
                    "2": {
                      "7": {
                        "1": "Vinyasa"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "woman doing gentle yoga in a sunlit room with plants"
                      }
                    }
                  }
                ],
                "5": "e8295ec7-6a39-4428-9ec9-2a672938470c"
              },
              {
                "1": "@session_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Pelvic Floor Strength"
                      }
                    }
                  },
                  {
                    "1": "instructor",
                    "2": {
                      "7": {
                        "1": "with Dr. Amara"
                      }
                    }
                  },
                  {
                    "1": "duration",
                    "2": {
                      "7": {
                        "1": "15 min"
                      }
                    }
                  },
                  {
                    "1": "level",
                    "2": {
                      "7": {
                        "1": "All Levels"
                      }
                    }
                  },
                  {
                    "1": "type",
                    "2": {
                      "7": {
                        "1": "Therapeutic"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "soft focus yoga mat and blocks in a warm earthy tone room"
                      }
                    }
                  }
                ],
                "5": "3a00bfa4-8fc1-4087-9284-b6eda035b5e8"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#E8DCC444"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 32,
                        "2": 32,
                        "3": 32,
                        "4": 32
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 24,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  },
                  {
                    "1": "margin",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "8": "lg"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "10": {
                                "1": 12
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "container",
                            "2": [
                              {
                                "1": "width",
                                "2": {
                                  "1": {
                                    "1": 40,
                                    "2": false
                                  }
                                }
                              },
                              {
                                "1": "height",
                                "2": {
                                  "1": {
                                    "1": 40,
                                    "2": false
                                  }
                                }
                              },
                              {
                                "1": "bg",
                                "2": {
                                  "4": {
                                    "1": "primary"
                                  }
                                }
                              },
                              {
                                "1": "radius",
                                "2": {
                                  "16": {
                                    "1": 20,
                                    "2": 20,
                                    "3": 20,
                                    "4": 20
                                  }
                                }
                              },
                              {
                                "1": "align_child",
                                "2": {
                                  "6": {
                                    "1": "center"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "eco_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "on_primary"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 20
                                      }
                                    }
                                  }
                                ],
                                "5": "da00ed9c-62bd-48c6-a24e-317d4702e59e"
                              }
                            ],
                            "5": "7b4491d6-8975-41e1-b99a-3bc1e5309254"
                          },
                          {
                            "1": "column",
                            "2": [
                              {
                                "1": "cross_align",
                                "2": {
                                  "6": {
                                    "1": "start"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "Second Trimester Focus"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "title_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 700
                                      }
                                    }
                                  }
                                ],
                                "5": "ab2b3338-e14f-468a-8568-64d99379cbbd"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "Safe movements for weeks 14-27"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "48be5303-307b-4a71-b8d0-81262d06abba"
                              }
                            ],
                            "5": "f8285a6e-c895-4a5b-868f-c04b091cc01e"
                          }
                        ],
                        "5": "f868eee2-0074-4a49-b1c2-0650b9fb38c7"
                      },
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "scroll",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          },
                          {
                            "1": "spacing",
                            "2": {
                              "7": {
                                "1": "md"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "container",
                            "2": [
                              {
                                "1": "width",
                                "2": {
                                  "1": {
                                    "1": 200,
                                    "2": false
                                  }
                                }
                              },
                              {
                                "1": "bg",
                                "2": {
                                  "4": {
                                    "1": "surface"
                                  }
                                }
                              },
                              {
                                "1": "radius",
                                "2": {
                                  "16": {
                                    "1": 24,
                                    "2": 24,
                                    "3": 24,
                                    "4": 24
                                  }
                                }
                              },
                              {
                                "1": "padding",
                                "2": {
                                  "5": {
                                    "1": 16,
                                    "2": 16,
                                    "3": 16,
                                    "4": 16
                                  }
                                }
                              },
                              {
                                "1": "border",
                                "2": {
                                  "22": {
                                    "1": 1,
                                    "2": "divider"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "column",
                                "2": [
                                  {
                                    "1": "cross_align",
                                    "2": {
                                      "6": {
                                        "1": "start"
                                      }
                                    }
                                  },
                                  {
                                    "1": "spacing",
                                    "2": {
                                      "7": {
                                        "1": "sm"
                                      }
                                    }
                                  }
                                ],
                                "3": [
                                  {
                                    "1": "container",
                                    "2": [
                                      {
                                        "1": "height",
                                        "2": {
                                          "1": {
                                            "1": 100,
                                            "2": false
                                          }
                                        }
                                      },
                                      {
                                        "1": "width",
                                        "2": {
                                          "1": {
                                            "1": "Infinity",
                                            "2": true
                                          }
                                        }
                                      },
                                      {
                                        "1": "radius",
                                        "2": {
                                          "16": {
                                            "1": 16,
                                            "2": 16,
                                            "3": 16,
                                            "4": 16
                                          }
                                        }
                                      },
                                      {
                                        "1": "clip",
                                        "2": {
                                          "9": {
                                            "1": true
                                          }
                                        }
                                      }
                                    ],
                                    "3": [
                                      {
                                        "1": "image",
                                        "2": [
                                          {
                                            "1": "source_desc",
                                            "2": {
                                              "12": {
                                                "1": 3,
                                                "2": "pregnant woman doing cat cow yoga pose"
                                              }
                                            }
                                          },
                                          {
                                            "1": "fit",
                                            "2": {
                                              "7": {
                                                "1": "cover"
                                              }
                                            }
                                          }
                                        ],
                                        "5": "91160ffa-898d-40f2-a9bd-75f21693c1f3"
                                      }
                                    ],
                                    "5": "0ad14637-ed59-4167-9e64-56789f0c9c46"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "Back Pain Relief"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "body_medium"
                                          }
                                        }
                                      },
                                      {
                                        "1": "font_weight",
                                        "2": {
                                          "10": {
                                            "1": 600
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "primary_text"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "321128fb-4678-40ad-981e-5b056e676659"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "12 min • Gentle"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "label_small"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "secondary_text"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "5a56b905-aced-4719-b316-0d788970e885"
                                  }
                                ],
                                "5": "62e7ae05-784c-428b-ab17-ac9d966b5dd7"
                              }
                            ],
                            "5": "974076a4-83b7-4c22-b994-b18a2cf1dbe6"
                          },
                          {
                            "1": "container",
                            "2": [
                              {
                                "1": "width",
                                "2": {
                                  "1": {
                                    "1": 200,
                                    "2": false
                                  }
                                }
                              },
                              {
                                "1": "bg",
                                "2": {
                                  "4": {
                                    "1": "surface"
                                  }
                                }
                              },
                              {
                                "1": "radius",
                                "2": {
                                  "16": {
                                    "1": 24,
                                    "2": 24,
                                    "3": 24,
                                    "4": 24
                                  }
                                }
                              },
                              {
                                "1": "padding",
                                "2": {
                                  "5": {
                                    "1": 16,
                                    "2": 16,
                                    "3": 16,
                                    "4": 16
                                  }
                                }
                              },
                              {
                                "1": "border",
                                "2": {
                                  "22": {
                                    "1": 1,
                                    "2": "divider"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "column",
                                "2": [
                                  {
                                    "1": "cross_align",
                                    "2": {
                                      "6": {
                                        "1": "start"
                                      }
                                    }
                                  },
                                  {
                                    "1": "spacing",
                                    "2": {
                                      "7": {
                                        "1": "sm"
                                      }
                                    }
                                  }
                                ],
                                "3": [
                                  {
                                    "1": "container",
                                    "2": [
                                      {
                                        "1": "height",
                                        "2": {
                                          "1": {
                                            "1": 100,
                                            "2": false
                                          }
                                        }
                                      },
                                      {
                                        "1": "width",
                                        "2": {
                                          "1": {
                                            "1": "Infinity",
                                            "2": true
                                          }
                                        }
                                      },
                                      {
                                        "1": "radius",
                                        "2": {
                                          "16": {
                                            "1": 16,
                                            "2": 16,
                                            "3": 16,
                                            "4": 16
                                          }
                                        }
                                      },
                                      {
                                        "1": "clip",
                                        "2": {
                                          "9": {
                                            "1": true
                                          }
                                        }
                                      }
                                    ],
                                    "3": [
                                      {
                                        "1": "image",
                                        "2": [
                                          {
                                            "1": "source_desc",
                                            "2": {
                                              "12": {
                                                "1": 3,
                                                "2": "yoga meditation pose hands on belly"
                                              }
                                            }
                                          },
                                          {
                                            "1": "fit",
                                            "2": {
                                              "7": {
                                                "1": "cover"
                                              }
                                            }
                                          }
                                        ],
                                        "5": "408b04d4-4d1b-4571-9860-0ec637be9cb6"
                                      }
                                    ],
                                    "5": "e0dd0393-ebd1-4b33-b746-811bdf6d7f62"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "Mindful Connection"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "body_medium"
                                          }
                                        }
                                      },
                                      {
                                        "1": "font_weight",
                                        "2": {
                                          "10": {
                                            "1": 600
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "primary_text"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "f1620b86-13c2-4b79-b135-548b1619e639"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "18 min • Slow"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "label_small"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "secondary_text"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "88df3e8f-ab13-415b-8b8a-3e5fb561dd65"
                                  }
                                ],
                                "5": "67074511-0bf0-434d-9872-a50f11d9a3bd"
                              }
                            ],
                            "5": "0b77d645-65c9-4d3d-99d0-8a656c97b7ab"
                          }
                        ],
                        "5": "76c13416-5ed5-4397-a1c3-2f3852c52e6b"
                      }
                    ],
                    "5": "7672ca2c-709b-4e9e-94bb-9fa6a170e56f"
                  }
                ],
                "5": "5ef01664-39ec-4892-acf4-7bf6b9541be0"
              },
              {
                "1": "@session_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Evening Restorative"
                      }
                    }
                  },
                  {
                    "1": "instructor",
                    "2": {
                      "7": {
                        "1": "with Elena Rae"
                      }
                    }
                  },
                  {
                    "1": "duration",
                    "2": {
                      "7": {
                        "1": "30 min"
                      }
                    }
                  },
                  {
                    "1": "level",
                    "2": {
                      "7": {
                        "1": "Intermediate"
                      }
                    }
                  },
                  {
                    "1": "type",
                    "2": {
                      "7": {
                        "1": "Hatha"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "cozy bedroom with candles and a yoga bolster"
                      }
                    }
                  }
                ],
                "5": "c68b13eb-aa10-4192-9b38-db68dd617c22"
              },
              {
                "1": "sizedbox",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "7": {
                        "1": "xl"
                      }
                    }
                  }
                ],
                "5": "1ec50672-b9ab-4638-a128-74acf85ab2af"
              }
            ],
            "5": "307ea789-4263-4178-87fb-e102fee9b893"
          }
        ],
        "5": "d9be7943-413f-428c-b04b-a99c2006a336"
      },
      {
        "1": "fab",
        "2": [
          {
            "1": "icon",
            "2": {
              "11": {
                "1": "support_agent_rounded"
              }
            }
          },
          {
            "1": "label",
            "2": {
              "7": {
                "1": "Ask Expert"
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "primary"
              }
            }
          },
          {
            "1": "color",
            "2": {
              "4": {
                "1": "on_primary"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          }
        ],
        "5": "02d6feb6-7fde-4834-90e6-cc6e69d9e857"
      }
    ],
    "5": "a9e95cee-abaf-4b14-96b6-b7ef4708430e"
  },
  "2": [
    {
      "1": "category_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                },
                "3": {
                  "4": {
                    "1": "surface"
                  }
                }
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 10,
                "2": 20,
                "3": 10,
                "4": 20
              }
            }
          },
          {
            "1": "border",
            "2": {
              "23": {
                "1": 1,
                "2": {
                  "1": "selected",
                  "2": {
                    "7": {
                      "1": "primary"
                    }
                  },
                  "3": {
                    "7": {
                      "1": "divider"
                    }
                  }
                }
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                },
                "3": {
                  "7": {
                    "1": "none"
                  }
                }
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 8
                  }
                }
              }
            ],
            "3": [
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "17": {
                        "1": "icon"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 18
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "4": {
                            "1": "on_primary"
                          }
                        },
                        "3": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    }
                  }
                ],
                "5": "3ec62659-7518-4c6a-93bf-d9f8bd72e867"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "label_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "4": {
                            "1": "on_primary"
                          }
                        },
                        "3": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        },
                        "3": {
                          "10": {
                            "1": 500
                          }
                        }
                      }
                    }
                  }
                ],
                "5": "bd00d81c-1836-4fe4-a62a-79890304e5a2"
              }
            ],
            "5": "32f33da2-5336-4de9-8513-058f9a798667"
          }
        ],
        "5": "9d36b71d-60e9-4e04-98ca-6a9b26cc902f"
      }
    },
    {
      "1": "session_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 32,
                "2": 32,
                "3": 32,
                "4": 32
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "lg"
              }
            }
          },
          {
            "1": "clip",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "stretch"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "stack",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 180,
                        "2": false
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "image",
                    "2": [
                      {
                        "1": "source_desc",
                        "2": {
                          "17": {
                            "1": "img_desc"
                          }
                        }
                      },
                      {
                        "1": "fit",
                        "2": {
                          "7": {
                            "1": "cover"
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": "Infinity",
                            "2": true
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 180,
                            "2": false
                          }
                        }
                      }
                    ],
                    "5": "bafa10e1-d2b3-45c7-841f-e5f25c35704b"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "top_right"
                          }
                        }
                      },
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "5": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2CC"
                              }
                            }
                          },
                          {
                            "1": "backdrop_blur",
                            "2": {
                              "10": {
                                "1": 8
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 16,
                                "2": 16,
                                "3": 16,
                                "4": 16
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 6,
                                "2": 12,
                                "3": 6,
                                "4": 12
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "10": {
                                    "1": 4
                                  }
                                }
                              },
                              {
                                "1": "main_size",
                                "2": {
                                  "7": {
                                    "1": "min"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "schedule_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 14
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "2b3f250a-4b08-4211-a981-de845c12af02"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "duration"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 600
                                      }
                                    }
                                  }
                                ],
                                "5": "ba953694-9776-4518-addc-55fcb19e62a8"
                              }
                            ],
                            "5": "8306720c-97c4-4957-a9d6-9ed88beeb668"
                          }
                        ],
                        "5": "8857e905-14e2-4757-8d54-b5e69d00ccd7"
                      }
                    ],
                    "5": "fb98040f-10a0-441f-8fb3-45bab65890c2"
                  }
                ],
                "5": "f35981ef-fa9a-43dc-a393-0b90203d2354"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 20,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "align",
                            "2": {
                              "6": {
                                "1": "space_between"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "expanded",
                            "3": [
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "title"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "title_medium"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 700
                                      }
                                    }
                                  },
                                  {
                                    "1": "max_lines",
                                    "2": {
                                      "10": {
                                        "1": 1
                                      }
                                    }
                                  },
                                  {
                                    "1": "overflow",
                                    "2": {
                                      "7": {
                                        "1": "ellipsis"
                                      }
                                    }
                                  }
                                ],
                                "5": "a8c2d75c-7248-4cb7-8191-5f0aba4e018f"
                              }
                            ],
                            "5": "8a77f256-af82-430e-b448-f995fdd9f1c8"
                          },
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "favorite_border_rounded"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "10": {
                                    "1": 20
                                  }
                                }
                              }
                            ],
                            "5": "08123669-f824-4543-bec7-43b5efe91336"
                          }
                        ],
                        "5": "24b8fb8b-683c-44bb-8b88-ba40b02c68b7"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "instructor"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "fab7da11-41a0-4f09-9fa9-7efb78a9720d"
                      },
                      {
                        "1": "sizedbox",
                        "2": [
                          {
                            "1": "height",
                            "2": {
                              "7": {
                                "1": "xs"
                              }
                            }
                          }
                        ],
                        "5": "abdba5f6-bab3-4183-b651-2c3b1781384f"
                      },
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "7": {
                                "1": "md"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "10": {
                                    "1": 4
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "signal_cellular_alt_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 14
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary"
                                      }
                                    }
                                  }
                                ],
                                "5": "6d130ddd-6e72-4141-9aa4-3453dbddcd45"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "level"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "11abd7e6-f22b-466f-bea7-b0944ade789a"
                              }
                            ],
                            "5": "dad33260-f6a4-465c-a300-46d0251eab06"
                          },
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "10": {
                                    "1": 4
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "self_improvement_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 14
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary"
                                      }
                                    }
                                  }
                                ],
                                "5": "dbfcd4f6-a307-4a9d-9f6a-8dbc1a2e92a1"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "type"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "1db61e68-c09b-4385-b341-d97e13d0d72d"
                              }
                            ],
                            "5": "eef1f3e5-41ac-4e47-943d-ee429acce481"
                          }
                        ],
                        "5": "03fdd742-8cfb-41cb-b8cb-945f0628bf39"
                      }
                    ],
                    "5": "8d8eb7b7-e78d-4f1d-8fdf-e384d5400f77"
                  }
                ],
                "5": "d96fd247-3393-457b-9ebd-d6674f768cdf"
              }
            ],
            "5": "11f97733-eba8-47da-b685-86825ac7e6a8"
          }
        ],
        "5": "fa39ebd2-1b24-40a0-9a80-b7408ec09c0a"
      }
    }
  ]
}
```

### 5. Dashboard

- Frame ID: `239ba398-8868-4bef-9149-87db7a2e10f0`
- Original page prompt: "A personalized home screen with daily wellness tips and progress tracking"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xl"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "space_between"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 4
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Good morning, Sarah"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "headline_medium"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 800
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "5c981b9e-9122-471b-a357-d5b8a41da1b5"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "24 Weeks • Golden Glow Phase"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "06875044-9849-4088-97e6-61af27bd03f2"
                  }
                ],
                "5": "627b4a1e-1c1e-4598-8c0d-59e6d6abde99"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 24,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  },
                  {
                    "1": "clip",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 2,
                        "2": "primary"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "image",
                    "2": [
                      {
                        "1": "source_desc",
                        "2": {
                          "12": {
                            "1": 3,
                            "2": "smiling pregnant woman portrait soft lighting"
                          }
                        }
                      },
                      {
                        "1": "fit",
                        "2": {
                          "7": {
                            "1": "cover"
                          }
                        }
                      }
                    ],
                    "5": "938c2861-7fc7-449e-a5aa-add431c8c2ba"
                  }
                ],
                "5": "3645006e-a9a7-4128-ae8e-f4a171ac56ca"
              }
            ],
            "5": "fc3feb69-8191-4622-9525-5a1a0412d8de"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "#F3E9D2"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 40,
                    "2": 40,
                    "3": 40,
                    "4": 40
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": "xl"
                  }
                }
              },
              {
                "1": "width",
                "2": {
                  "1": {
                    "1": "Infinity",
                    "2": true
                  }
                }
              },
              {
                "1": "clip",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              }
            ],
            "3": [
              {
                "1": "stack",
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "2": {
                              "1": 1.4,
                              "2": -0.5
                            }
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 180,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 180,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 90,
                            "2": 90,
                            "3": 90,
                            "4": 90
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#E8DCC4"
                          }
                        }
                      },
                      {
                        "1": "opacity",
                        "2": {
                          "10": {
                            "1": 0.5
                          }
                        }
                      }
                    ],
                    "5": "3a408152-4465-4641-9a4d-2178604ee202"
                  },
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Today's Bloom"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_large"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "9bd84656-2e3c-44f2-ae66-8d6d477a1e57"
                      },
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "7": {
                                "1": "md"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "container",
                            "2": [
                              {
                                "1": "width",
                                "2": {
                                  "1": {
                                    "1": 80,
                                    "2": false
                                  }
                                }
                              },
                              {
                                "1": "height",
                                "2": {
                                  "1": {
                                    "1": 80,
                                    "2": false
                                  }
                                }
                              },
                              {
                                "1": "align_child",
                                "2": {
                                  "6": {
                                    "1": "center"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "progress",
                                "2": [
                                  {
                                    "1": "value",
                                    "2": {
                                      "10": {
                                        "1": 0.7
                                      }
                                    }
                                  },
                                  {
                                    "1": "variant",
                                    "2": {
                                      "7": {
                                        "1": "circular"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 80
                                      }
                                    }
                                  },
                                  {
                                    "1": "thickness",
                                    "2": {
                                      "10": {
                                        "1": 8
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary"
                                      }
                                    }
                                  },
                                  {
                                    "1": "bg_color",
                                    "2": {
                                      "4": {
                                        "1": "#FFFFFF"
                                      }
                                    }
                                  }
                                ],
                                "5": "5bf4357a-c3cd-46ff-8ba7-0d825a898fe1"
                              }
                            ],
                            "5": "4f177140-d275-4867-a977-c22791e3c030"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "70%"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_large"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              }
                            ],
                            "5": "8153c017-9fb8-4818-bde4-c6b57d4d548e"
                          },
                          {
                            "1": "expanded",
                            "3": [
                              {
                                "1": "column",
                                "2": [
                                  {
                                    "1": "cross_align",
                                    "2": {
                                      "6": {
                                        "1": "start"
                                      }
                                    }
                                  },
                                  {
                                    "1": "spacing",
                                    "2": {
                                      "7": {
                                        "1": "xs"
                                      }
                                    }
                                  }
                                ],
                                "3": [
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "Almost there!"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "body_medium"
                                          }
                                        }
                                      },
                                      {
                                        "1": "font_weight",
                                        "2": {
                                          "10": {
                                            "1": 600
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "primary_text"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "a191fc4a-74ec-4b31-8d4e-e1e1cd8d8a8d"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "Complete your pelvic floor exercises to hit your daily goal."
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "body_small"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "secondary_text"
                                          }
                                        }
                                      },
                                      {
                                        "1": "max_lines",
                                        "2": {
                                          "10": {
                                            "1": 2
                                          }
                                        }
                                      }
                                    ],
                                    "5": "aaf3fb88-8d9d-4a3a-b13d-2bc003c6b0f2"
                                  }
                                ],
                                "5": "4fd553f9-54a2-4a95-a30a-aa98911987dc"
                              }
                            ],
                            "5": "fffc9790-0112-4777-90e3-5f561787f099"
                          }
                        ],
                        "5": "5b11a695-dbf2-4670-8281-c716e51670f5"
                      }
                    ],
                    "5": "7cfbcecf-4f0e-4731-b749-a65cf3da5240"
                  }
                ],
                "5": "4ea5e88b-0d5a-422e-aa11-950760ecfe6b"
              }
            ],
            "5": "bf9297b0-595c-4688-bedf-34b0cca7a3c0"
          },
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "@quick_stat",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Water"
                      }
                    }
                  },
                  {
                    "1": "value",
                    "2": {
                      "7": {
                        "1": "1.8"
                      }
                    }
                  },
                  {
                    "1": "unit",
                    "2": {
                      "7": {
                        "1": "L"
                      }
                    }
                  }
                ],
                "5": "6a28a52f-b3ea-49e6-b0b1-6a81ab8b9b37"
              },
              {
                "1": "@quick_stat",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Steps"
                      }
                    }
                  },
                  {
                    "1": "value",
                    "2": {
                      "7": {
                        "1": "4,200"
                      }
                    }
                  },
                  {
                    "1": "unit",
                    "2": {
                      "7": {
                        "1": ""
                      }
                    }
                  }
                ],
                "5": "18723ef6-d523-40d5-931e-d4192e9292f9"
              },
              {
                "1": "@quick_stat",
                "2": [
                  {
                    "1": "label",
                    "2": {
                      "7": {
                        "1": "Sleep"
                      }
                    }
                  },
                  {
                    "1": "value",
                    "2": {
                      "7": {
                        "1": "7.5"
                      }
                    }
                  },
                  {
                    "1": "unit",
                    "2": {
                      "7": {
                        "1": "h"
                      }
                    }
                  }
                ],
                "5": "795a432b-b080-411e-833d-c25e68e4459e"
              }
            ],
            "5": "65164997-9a55-4ff2-ae7a-26627e27fb79"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Wellness Trend"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_medium"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "9fe6378a-c7b2-4347-9a99-6535ea42256c"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Last 7 Days"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      }
                    ],
                    "5": "926d94de-fd91-41f4-b2d6-4f9125d50fcf"
                  }
                ],
                "5": "11829ecd-65e8-470c-8fe9-3a435e879c81"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 180,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": "Infinity",
                        "2": true
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 32,
                        "2": 32,
                        "3": 32,
                        "4": 32
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "lg"
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 1,
                        "2": "divider"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "line_chart",
                    "2": [
                      {
                        "1": "data",
                        "2": {
                          "7": {
                            "1": "60,40,70,55,90,80,95"
                          }
                        }
                      },
                      {
                        "1": "labels",
                        "2": {
                          "7": {
                            "1": "M,T,W,T,F,S,S"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "curved",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      },
                      {
                        "1": "filled",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      },
                      {
                        "1": "fill_opacity",
                        "2": {
                          "10": {
                            "1": 0.1
                          }
                        }
                      },
                      {
                        "1": "show_dots",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      },
                      {
                        "1": "line_width",
                        "2": {
                          "10": {
                            "1": 3
                          }
                        }
                      }
                    ],
                    "5": "7667b070-6483-4343-b0ae-181319966ada"
                  }
                ],
                "5": "cf9b15cd-33f9-434d-af54-a8a70f1c0969"
              }
            ],
            "5": "fbc2b9e1-b5c2-459d-9961-69703076bebe"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Nurture Your Soul"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_medium"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 700
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  }
                ],
                "5": "dd62b402-9d54-4b94-8213-dbd687d062ab"
              },
              {
                "1": "@activity_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Morning Flow Yoga"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "15 mins • Gentle Stretching"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "self_improvement_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#E0EADD"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#6B8E63"
                      }
                    }
                  }
                ],
                "5": "af2d92dc-f8c7-4df9-a915-d39dc5b79f13"
              },
              {
                "1": "@activity_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Deep Breath Meditation"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "10 mins • Anxiety Relief"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "air_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#F9E5E5"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#D4A5A5"
                      }
                    }
                  }
                ],
                "5": "4762baf2-8f4b-43c0-b58c-6f1cd9f67150"
              },
              {
                "1": "@activity_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Nutrient Check-in"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Log your prenatal vitamins"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "restaurant_rounded"
                      }
                    }
                  },
                  {
                    "1": "icon_bg",
                    "2": {
                      "4": {
                        "1": "#FFF4E5"
                      }
                    }
                  },
                  {
                    "1": "icon_color",
                    "2": {
                      "4": {
                        "1": "#E67E22"
                      }
                    }
                  }
                ],
                "5": "b043c143-3074-45c0-9391-8db9cbead3dd"
              }
            ],
            "5": "1ab176f3-4fe5-40a2-8a63-3dee4eff5131"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Daily Wisdom"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_medium"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 700
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  }
                ],
                "5": "86ba0789-43a3-46b6-903b-419c90ae1627"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "scroll",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 0
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@tip_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Hydration"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#E0EADD"
                          }
                        }
                      }
                    ],
                    "5": "b6cb341e-d0a9-4e4c-8bbd-6d71d2da68e0"
                  },
                  {
                    "1": "@tip_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Mindfulness"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#F9E5E5"
                          }
                        }
                      }
                    ],
                    "5": "daf80f0e-654f-4a2e-a0df-f75f61d42ff5"
                  },
                  {
                    "1": "@tip_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Nutrition"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#F3E9D2"
                          }
                        }
                      }
                    ],
                    "5": "32c8d7f1-ce2a-4830-b0db-97f5388a678a"
                  },
                  {
                    "1": "@tip_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Rest"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#E8DCC4"
                          }
                        }
                      }
                    ],
                    "5": "57461edb-75b4-4aaf-9eaa-dd47c180194f"
                  }
                ],
                "5": "bce85aec-989f-48f1-820c-e0bbd06e434b"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 32,
                        "2": 32,
                        "3": 32,
                        "4": 32
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "lg"
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 1,
                        "2": "divider"
                      }
                    }
                  },
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": "Infinity",
                        "2": true
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "sm"
                          }
                        }
                      },
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "7": {
                                "1": "sm"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "lightbulb_outline_rounded"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "accent"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "10": {
                                    "1": 20
                                  }
                                }
                              }
                            ],
                            "5": "0361c389-0068-471c-80a4-9be475601656"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Did you know?"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_large"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              }
                            ],
                            "5": "5da943c7-a18d-47b5-b69e-7cacca5570c1"
                          }
                        ],
                        "5": "45ca84fb-c147-4802-826c-3a28a2f044a9"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Walking for just 10 minutes after lunch can help regulate blood sugar levels and improve your energy throughout the afternoon."
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          },
                          {
                            "1": "line_height",
                            "2": {
                              "10": {
                                "1": 1.5
                              }
                            }
                          }
                        ],
                        "5": "fad6c7e6-dec6-468b-9a76-f23af1f1ff2a"
                      }
                    ],
                    "5": "b364d6e7-913d-42dd-95e1-961b97e6c4a2"
                  }
                ],
                "5": "66098b13-e344-43e9-9792-60fa99a1dbad"
              }
            ],
            "5": "9c4b238e-0f43-4049-8ed8-8abbb6edad55"
          },
          {
            "1": "sizedbox",
            "2": [
              {
                "1": "height",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "5": "953278da-03f7-434e-b98b-f78befbaae0e"
          }
        ],
        "5": "6210cc1e-a99c-4b12-8106-550b845bf24d"
      },
      {
        "1": "fab",
        "2": [
          {
            "1": "icon",
            "2": {
              "11": {
                "1": "add_rounded"
              }
            }
          },
          {
            "1": "label",
            "2": {
              "7": {
                "1": "Log Activity"
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "primary"
              }
            }
          },
          {
            "1": "color",
            "2": {
              "4": {
                "1": "on_primary"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          }
        ],
        "5": "783c56b1-c64a-40da-aa84-96c8b7129812"
      }
    ],
    "5": "f2c9ffc1-7227-422f-b93d-928fcdd8ed95"
  },
  "2": [
    {
      "1": "quick_stat",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "md"
              }
            }
          },
          {
            "1": "expanded",
            "2": {
              "20": {
                "1": true,
                "2": 1
              }
            }
          },
          {
            "1": "border",
            "2": {
              "22": {
                "1": 1,
                "2": "divider"
              }
            }
          }
        ],
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "xs"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "label_small"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  }
                ],
                "5": "91c3cde1-0252-4dae-a4ea-5bd29661381a"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "xs"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "17": {
                            "1": "value"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_medium"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "acf8185a-2441-42d1-bfeb-5683bc1e3fba"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "17": {
                            "1": "unit"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_small"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      },
                      {
                        "1": "visible",
                        "2": {
                          "17": {
                            "1": "unit"
                          }
                        }
                      }
                    ],
                    "5": "98505e50-eefa-4471-ae95-9ba3bedd8c85"
                  }
                ],
                "5": "c6fe41b3-0b75-4465-998c-6f9f501af5d1"
              }
            ],
            "5": "0fc5eda4-da8f-4b7d-9791-3bafe19f9c6c"
          }
        ],
        "5": "36951905-8bde-4d64-849f-a22afe2f0028"
      }
    },
    {
      "1": "activity_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 32,
                "2": 32,
                "3": 32,
                "4": 32
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "lg"
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "md"
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 56,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 56,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "17": {
                        "1": "icon_bg"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 20,
                        "2": 20,
                        "3": 20,
                        "4": 20
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "17": {
                            "1": "icon"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "17": {
                            "1": "icon_color"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 28
                          }
                        }
                      }
                    ],
                    "5": "407d8000-361d-4599-b13c-8b285bc2c35b"
                  }
                ],
                "5": "5885d840-714b-4d64-9818-730771d37fda"
              },
              {
                "1": "expanded",
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 4
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "title"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_medium"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "b3f0b6e6-4348-4d8d-886d-c11ff4a37960"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "subtitle"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "fd80addc-4a8c-48ed-81bc-9e02b5579756"
                      }
                    ],
                    "5": "dfdca541-47fc-406e-82fe-cfb5055e6807"
                  }
                ],
                "5": "3ac7c987-3615-4abc-a361-f00458cdc36c"
              },
              {
                "1": "iconbutton",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "11": {
                        "1": "play_circle_fill_rounded"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 32
                      }
                    }
                  }
                ],
                "5": "4b829c7f-f363-47e5-965b-a15b15b62f89"
              }
            ],
            "5": "ea635f22-4cb4-415b-8c15-39917e181911"
          }
        ],
        "5": "7ab4f1d2-3b6c-4e6c-bd06-85ed4ea2f3e1"
      }
    },
    {
      "1": "tip_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "17": {
                "1": "bg"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 100,
                "2": 100,
                "3": 100,
                "4": 100
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "sm",
                "7": "md",
                "8": "sm",
                "9": "md"
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "7": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "label"
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "label_small"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "4": {
                    "1": "primary_text"
                  }
                }
              },
              {
                "1": "font_weight",
                "2": {
                  "10": {
                    "1": 600
                  }
                }
              }
            ],
            "5": "15da774e-5e77-4ed8-9ca6-801eb85acf37"
          }
        ],
        "5": "b23bce5c-e3da-416a-bba2-b6acd353b280"
      }
    }
  ]
}
```

### 6. Expert Consultations

- Frame ID: `56e285da-362b-4ad7-9318-d7277e3967fb`
- Original page prompt: "A booking page to schedule sessions with fertility and postnatal experts"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "10": {
                "1": 24
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "space_between"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 4
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Expert Support"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "headline_medium"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 800
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "d4dfe8ef-5edc-4d8c-ac48-888ab814cd21"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Guidance for your unique journey"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "ec7ff5ad-dd28-4570-8f31-36197c3d4a93"
                  }
                ],
                "5": "e3132edc-5717-46d8-aa28-875f193f54cb"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 48,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 16,
                        "2": 16,
                        "3": 16,
                        "4": 16
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 1,
                        "2": "divider"
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "11": {
                            "1": "tune_rounded"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 24
                          }
                        }
                      }
                    ],
                    "5": "e2839eb0-fae5-4955-bb9b-599541a3d89b"
                  }
                ],
                "5": "ea97f856-9571-4b02-b443-59b2f2f5b95e"
              }
            ],
            "5": "b5682894-b67e-4a2e-907e-9b0d37dd7b11"
          },
          {
            "1": "textfield",
            "2": [
              {
                "1": "hint",
                "2": {
                  "7": {
                    "1": "Search by name or specialty..."
                  }
                }
              },
              {
                "1": "prefix_icon",
                "2": {
                  "7": {
                    "1": "search_rounded"
                  }
                }
              },
              {
                "1": "filled",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              },
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "surface"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 20,
                    "2": 20,
                    "3": 20,
                    "4": 20
                  }
                }
              },
              {
                "1": "border",
                "2": {
                  "22": {
                    "1": 1,
                    "2": "divider"
                  }
                }
              }
            ],
            "5": "fa2f6a66-1be1-401c-bb39-da0adf302dd6"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 16
                  }
                }
              }
            ],
            "3": [
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Specialties"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_medium"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 700
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  }
                ],
                "5": "ec88a98c-9859-494f-8aac-4aabba5f56c7"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "scroll",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 0
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "All Experts"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "5": "909a2fd7-0351-42c8-8cfc-6ec2146b4cfd"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Fertility"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "ecee6c5b-fca5-40a9-a2b6-754644092bfa"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Prenatal Yoga"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "922bb802-f391-4cfd-b5ab-872dfe700770"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Postnatal Care"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "729c0b44-73f0-441c-8f56-03d718e21bfe"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Nutrition"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "842ba09a-f93b-490d-8dab-a8b004268ff7"
                  }
                ],
                "5": "9d3b294d-fec1-4cc3-b623-8bcfabc1a632"
              }
            ],
            "5": "fb235ead-a6dd-4ca7-ae9a-9f5746ffc255"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "#E8DCC4"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 32,
                    "2": 32,
                    "3": 32,
                    "4": 32
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 24,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              },
              {
                "1": "width",
                "2": {
                  "1": {
                    "1": "Infinity",
                    "2": true
                  }
                }
              },
              {
                "1": "clip",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              }
            ],
            "3": [
              {
                "1": "stack",
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "2": {
                              "1": 1.5,
                              "2": -0.5
                            }
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 150,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 150,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#D4A5A5"
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "5": "full"
                          }
                        }
                      },
                      {
                        "1": "opacity",
                        "2": {
                          "10": {
                            "1": 0.3
                          }
                        }
                      }
                    ],
                    "5": "27948535-ba79-494b-8ebb-14c3ba7985b8"
                  },
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 12
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 8,
                                "2": 16,
                                "3": 8,
                                "4": 16
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 12,
                                "2": 12,
                                "3": 12,
                                "4": 12
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "NEW WORKSHOP"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_small"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "#A8B5A0"
                                  }
                                }
                              }
                            ],
                            "5": "fd8e4ba3-2cf1-493e-8ecb-acb4e3f3a329"
                          }
                        ],
                        "5": "c880694e-46d5-4186-9cab-523ea5e2d718"
                      },
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          },
                          {
                            "1": "spacing",
                            "2": {
                              "10": {
                                "1": 4
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Mindful Conception"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "title_large"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 800
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              }
                            ],
                            "5": "0bbd60a2-3cc8-4866-b27a-d614c0a4438e"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Join Dr. Sarah Chen for a group meditation session this Friday."
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "body_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              },
                              {
                                "1": "max_lines",
                                "2": {
                                  "10": {
                                    "1": 2
                                  }
                                }
                              }
                            ],
                            "5": "a33fc237-1cc8-4182-abb4-d5c535490f2d"
                          }
                        ],
                        "5": "90a8a594-6788-4aa3-aa21-5d5d3f424c42"
                      },
                      {
                        "1": "button",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Register Now"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "surface"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 12,
                                "2": 12,
                                "3": 12,
                                "4": 12
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "7": {
                                "1": "small"
                              }
                            }
                          }
                        ],
                        "5": "7f2a4d3b-9d3a-41a7-8840-0d72ef5dd152"
                      }
                    ],
                    "5": "e59cf1cd-382f-4c15-95c6-7b351d03abb4"
                  }
                ],
                "5": "30d97dc5-0d3c-4441-ba55-381b80555476"
              }
            ],
            "5": "cd7c1db8-129d-4e4b-816c-e45a7e61fdfc"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 16
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Available Today"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_medium"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "be560900-2cbe-45f2-9d22-8e89d54580dc"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "See All"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      }
                    ],
                    "5": "bd6911a7-9328-423c-8938-ea44147c3869"
                  }
                ],
                "5": "e94cb336-c3a0-4e53-846d-8497afe4bb3d"
              },
              {
                "1": "@expert_card",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "7": {
                        "1": "Dr. Elena Moss"
                      }
                    }
                  },
                  {
                    "1": "specialty",
                    "2": {
                      "7": {
                        "1": "Fertility Specialist"
                      }
                    }
                  },
                  {
                    "1": "rating",
                    "2": {
                      "7": {
                        "1": "4.9"
                      }
                    }
                  },
                  {
                    "1": "experience",
                    "2": {
                      "7": {
                        "1": "12 yrs exp"
                      }
                    }
                  },
                  {
                    "1": "price",
                    "2": {
                      "7": {
                        "1": "$80/hr"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "professional woman doctor smiling soft lighting"
                      }
                    }
                  }
                ],
                "5": "cd91db1c-7bcd-450b-937f-d085e431df6a"
              },
              {
                "1": "@expert_card",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "7": {
                        "1": "Maya Rivers"
                      }
                    }
                  },
                  {
                    "1": "specialty",
                    "2": {
                      "7": {
                        "1": "Postnatal Yoga Expert"
                      }
                    }
                  },
                  {
                    "1": "rating",
                    "2": {
                      "7": {
                        "1": "5.0"
                      }
                    }
                  },
                  {
                    "1": "experience",
                    "2": {
                      "7": {
                        "1": "8 yrs exp"
                      }
                    }
                  },
                  {
                    "1": "price",
                    "2": {
                      "7": {
                        "1": "$65/hr"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "calm woman yoga instructor portrait"
                      }
                    }
                  }
                ],
                "5": "3775b218-0428-4da6-a4c2-b312c8effe7b"
              },
              {
                "1": "@expert_card",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "7": {
                        "1": "Dr. Julianne Hart"
                      }
                    }
                  },
                  {
                    "1": "specialty",
                    "2": {
                      "7": {
                        "1": "Clinical Nutritionist"
                      }
                    }
                  },
                  {
                    "1": "rating",
                    "2": {
                      "7": {
                        "1": "4.8"
                      }
                    }
                  },
                  {
                    "1": "experience",
                    "2": {
                      "7": {
                        "1": "10 yrs exp"
                      }
                    }
                  },
                  {
                    "1": "price",
                    "2": {
                      "7": {
                        "1": "$90/hr"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "friendly nutritionist woman in clinic"
                      }
                    }
                  }
                ],
                "5": "5f9145e5-9bc7-4a49-a138-7d4b93c0b20e"
              },
              {
                "1": "@expert_card",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "7": {
                        "1": "Clara Bennett"
                      }
                    }
                  },
                  {
                    "1": "specialty",
                    "2": {
                      "7": {
                        "1": "Doula & Birth Coach"
                      }
                    }
                  },
                  {
                    "1": "rating",
                    "2": {
                      "7": {
                        "1": "4.9"
                      }
                    }
                  },
                  {
                    "1": "experience",
                    "2": {
                      "7": {
                        "1": "15 yrs exp"
                      }
                    }
                  },
                  {
                    "1": "price",
                    "2": {
                      "7": {
                        "1": "$75/hr"
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "warm elderly woman smiling"
                      }
                    }
                  }
                ],
                "5": "6c9cd5a7-9741-44cc-b682-4c9781aae1fb"
              }
            ],
            "5": "cfaa2030-7e74-4db0-9873-e62cc8a66c39"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 32,
                    "2": 0,
                    "3": 32,
                    "4": 0
                  }
                }
              },
              {
                "1": "align_child",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 12
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 80,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 80,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 40,
                            "2": 40,
                            "3": 40,
                            "4": 40
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#FAF7F2"
                          }
                        }
                      },
                      {
                        "1": "align_child",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "self_improvement_rounded"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 40
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#D4A5A5"
                              }
                            }
                          }
                        ],
                        "5": "1f66e4d4-724d-422e-a013-222c97df5073"
                      }
                    ],
                    "5": "eb5961a3-80e2-4fce-a9f3-6fe7e267e02a"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "You are supported every step of the way."
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_medium"
                          }
                        }
                      },
                      {
                        "1": "font_style",
                        "2": {
                          "7": {
                            "1": "italic"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      },
                      {
                        "1": "text_align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "5": "b4e5f3fd-b877-4c20-b3d1-e54d5641d30b"
                  }
                ],
                "5": "62519b5c-49f7-485e-a714-8013886b3c0d"
              }
            ],
            "5": "0e99fa57-eeda-438a-b648-00efeac49208"
          }
        ],
        "5": "4d7804e4-8b00-4e30-8793-4d72f078a329"
      }
    ],
    "5": "4f44bf0c-c983-462b-8e15-09811d65d13f"
  },
  "2": [
    {
      "1": "expert_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "md"
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "22": {
                "1": 1,
                "2": "divider"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 16
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "stack",
                "3": [
                  {
                    "1": "avatar",
                    "2": [
                      {
                        "1": "source_desc",
                        "2": {
                          "17": {
                            "1": "img_desc"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 64
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 20,
                            "2": 20,
                            "3": 20,
                            "4": 20
                          }
                        }
                      }
                    ],
                    "5": "4d387f74-3304-4133-99e0-3b6d91a9a694"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "2": {
                              "1": 1,
                              "2": 1
                            }
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "success"
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 14,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 14,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "5": "full"
                          }
                        }
                      },
                      {
                        "1": "border",
                        "2": {
                          "22": {
                            "1": 2,
                            "2": "surface"
                          }
                        }
                      }
                    ],
                    "5": "db2c29ea-493e-40d9-b5b9-31fd940b1bee"
                  }
                ],
                "5": "63c3e239-c5ba-4e7f-afed-d3521696358c"
              },
              {
                "1": "expanded",
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 4
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "align",
                            "2": {
                              "6": {
                                "1": "space_between"
                              }
                            }
                          },
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "center"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "17": {
                                    "1": "name"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "title_medium"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              }
                            ],
                            "5": "1a812b20-baad-4017-b4cc-c30d3c45a4ca"
                          },
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "10": {
                                    "1": 2
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "star_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "accent"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 16
                                      }
                                    }
                                  }
                                ],
                                "5": "5591198d-3f00-48a3-8a92-95f9ef5ca9d3"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "rating"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_medium"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 600
                                      }
                                    }
                                  }
                                ],
                                "5": "5bf19d5b-58d3-431b-9494-097377582206"
                              }
                            ],
                            "5": "d41bdcaf-f373-4a59-9b41-584d0a197b94"
                          }
                        ],
                        "5": "c734514c-9f0a-4455-acf1-2bc0d5c7768a"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "specialty"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 500
                              }
                            }
                          }
                        ],
                        "5": "d08a7e50-750d-4af1-b971-0a564fd299cc"
                      },
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "10": {
                                "1": 12
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 4,
                                "2": 0,
                                "3": 4,
                                "4": 0
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "10": {
                                    "1": 4
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "schedule_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 14
                                      }
                                    }
                                  }
                                ],
                                "5": "79261e57-0667-44ec-bbd9-eff86f8d1ff7"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "experience"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "535b60af-0fc4-4e02-b61b-5ba739912b49"
                              }
                            ],
                            "5": "c9f9127a-4469-492e-b39b-91a2094f6850"
                          },
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "10": {
                                    "1": 4
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "11": {
                                        "1": "payments_rounded"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 14
                                      }
                                    }
                                  }
                                ],
                                "5": "a3737456-62c6-491b-b889-241cf03233de"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "price"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "dba599dc-7d45-4439-bd2f-a72d50cfd8c2"
                              }
                            ],
                            "5": "d79c31ff-9b13-4d7d-92b1-789407ec6001"
                          }
                        ],
                        "5": "531dbbdd-d057-4a5c-ac65-8351bd398217"
                      },
                      {
                        "1": "sizedbox",
                        "2": [
                          {
                            "1": "height",
                            "2": {
                              "1": {
                                "1": 8,
                                "2": false
                              }
                            }
                          }
                        ],
                        "5": "b2c5c0a8-19bb-492f-864e-21f18ec2b121"
                      },
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "10": {
                                "1": 8
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "button",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "View Profile"
                                  }
                                }
                              },
                              {
                                "1": "variant",
                                "2": {
                                  "7": {
                                    "1": "outlined"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "7": {
                                    "1": "small"
                                  }
                                }
                              },
                              {
                                "1": "radius",
                                "2": {
                                  "16": {
                                    "1": 12,
                                    "2": 12,
                                    "3": 12,
                                    "4": 12
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "border",
                                "2": {
                                  "22": {
                                    "1": 1,
                                    "2": "divider"
                                  }
                                }
                              }
                            ],
                            "5": "93c5fde0-11bb-4f14-bee4-4b4b5acc7f6f"
                          },
                          {
                            "1": "expanded",
                            "3": [
                              {
                                "1": "button",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "Book Session"
                                      }
                                    }
                                  },
                                  {
                                    "1": "variant",
                                    "2": {
                                      "7": {
                                        "1": "filled"
                                      }
                                    }
                                  },
                                  {
                                    "1": "bg",
                                    "2": {
                                      "4": {
                                        "1": "primary"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "7": {
                                        "1": "small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "radius",
                                    "2": {
                                      "16": {
                                        "1": 12,
                                        "2": 12,
                                        "3": 12,
                                        "4": 12
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "on_primary"
                                      }
                                    }
                                  }
                                ],
                                "5": "c1f5cc65-6987-40b7-ba1f-ac1cde51a28c"
                              }
                            ],
                            "5": "03afb295-cf47-4fa4-9e85-234a439fe7fe"
                          }
                        ],
                        "5": "2b75f65b-1cc5-4184-8500-1810e308a659"
                      }
                    ],
                    "5": "a0e600d2-21f6-4b5e-8c72-b6f8deed1307"
                  }
                ],
                "5": "f5164a9b-ce24-4025-b6f0-aa50d6103827"
              }
            ],
            "5": "dbf223cf-5691-4296-a4a1-d20439802e38"
          }
        ],
        "5": "f190b36c-c27a-43d5-9be5-1a64692831fe"
      }
    },
    {
      "1": "category_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 12,
                "2": 20,
                "3": 12,
                "4": 20
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                },
                "3": {
                  "4": {
                    "1": "surface"
                  }
                }
              }
            }
          },
          {
            "1": "border",
            "2": {
              "23": {
                "1": 1,
                "2": {
                  "1": "selected",
                  "2": {
                    "7": {
                      "1": "primary"
                    }
                  },
                  "3": {
                    "7": {
                      "1": "divider"
                    }
                  }
                }
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 8,
                "3": 0,
                "4": 0
              }
            }
          }
        ],
        "3": [
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "label"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "18": {
                    "1": "selected",
                    "2": {
                      "4": {
                        "1": "on_primary"
                      }
                    },
                    "3": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  }
                }
              },
              {
                "1": "font_weight",
                "2": {
                  "10": {
                    "1": 600
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "label_large"
                  }
                }
              }
            ],
            "5": "46474585-a7c0-4f3d-90a8-2971a970ddb0"
          }
        ],
        "5": "edb68108-0751-48fe-ad23-2635693a4d71"
      }
    }
  ]
}
```

### 7. Community Forum

- Frame ID: `18b0c2b1-cc7b-4bcd-8c62-bd38ffeb5b3e`
- Original page prompt: "A safe space for users to share experiences and find peer support"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "stack",
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "scroll",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 0
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 32,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 8
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Village Circle"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "headline_medium"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 800
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "c119f0aa-221e-4a8e-96c4-ffbd0c689926"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Share your journey, find your strength."
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_large"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "648db6d5-4ea7-4ddf-850f-e65507a536c8"
                      }
                    ],
                    "5": "5a2f33a1-ef67-49b2-9b52-83998c76c89a"
                  }
                ],
                "5": "ce0b5124-2c91-420a-aabf-1678183db9e6"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "textfield",
                    "2": [
                      {
                        "1": "hint",
                        "2": {
                          "7": {
                            "1": "Search conversations..."
                          }
                        }
                      },
                      {
                        "1": "prefix_icon",
                        "2": {
                          "7": {
                            "1": "search"
                          }
                        }
                      },
                      {
                        "1": "filled",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "surface"
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 20,
                            "2": 20,
                            "3": 20,
                            "4": 20
                          }
                        }
                      },
                      {
                        "1": "border",
                        "2": {
                          "22": {
                            "1": 0,
                            "2": "transparent"
                          }
                        }
                      }
                    ],
                    "5": "1466c4a6-994d-49d9-942e-b558203696d7"
                  }
                ],
                "5": "5baecf6a-1479-4140-8772-b81ff1f682fb"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "scroll",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 0
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "All Topics"
                          }
                        }
                      },
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "grid_view_rounded"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "5": "00bfb2cd-4ba1-48ed-b50b-7807fd32cdc9"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Prenatal"
                          }
                        }
                      },
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "self_improvement_rounded"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "7146999f-1407-4167-a1cf-d638cfb00938"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Postnatal"
                          }
                        }
                      },
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "child_care_rounded"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "42ab6da8-0e22-4eba-9fef-2360c241256a"
                  },
                  {
                    "1": "@category_chip",
                    "2": [
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Nutrition"
                          }
                        }
                      },
                      {
                        "1": "icon",
                        "2": {
                          "7": {
                            "1": "local_leaf_rounded"
                          }
                        }
                      },
                      {
                        "1": "selected",
                        "2": {
                          "9": {
                            "1": false
                          }
                        }
                      }
                    ],
                    "5": "60bfb276-200a-46af-9e2d-eda74d3c1251"
                  }
                ],
                "5": "eb3f1e33-a4b2-40f4-a663-ae54ec10eb43"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 16
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 32,
                        "4": 0
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 0,
                            "2": 24,
                            "3": 0,
                            "4": 24
                          }
                        }
                      },
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "space_between"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Upcoming Live Sessions"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_medium"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "e9fd9122-8b19-4388-9d95-a16649f87b55"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "View All"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          },
                          {
                            "1": "font_size",
                            "2": {
                              "10": {
                                "1": 14
                              }
                            }
                          }
                        ],
                        "5": "68a592f9-0c2d-429a-9161-01305dcf0801"
                      }
                    ],
                    "5": "a15a2cd6-2e8f-4c2c-bdda-c4810a84d9f6"
                  },
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "scroll",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      },
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 0,
                            "2": 24,
                            "3": 0,
                            "4": 24
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 0
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "@expert_highlight",
                        "2": [
                          {
                            "1": "title",
                            "2": {
                              "7": {
                                "1": "Gentle Postpartum Recovery"
                              }
                            }
                          },
                          {
                            "1": "name",
                            "2": {
                              "7": {
                                "1": "Dr. Sarah Chen"
                              }
                            }
                          },
                          {
                            "1": "role",
                            "2": {
                              "7": {
                                "1": "Pelvic Floor Specialist"
                              }
                            }
                          },
                          {
                            "1": "img",
                            "2": {
                              "7": {
                                "1": "portrait of a smiling female doctor"
                              }
                            }
                          }
                        ],
                        "5": "68d036ba-1244-4b68-8980-c96fa444f021"
                      },
                      {
                        "1": "@expert_highlight",
                        "2": [
                          {
                            "1": "title",
                            "2": {
                              "7": {
                                "1": "Mindful Breastfeeding Tips"
                              }
                            }
                          },
                          {
                            "1": "name",
                            "2": {
                              "7": {
                                "1": "Maya Rivers"
                              }
                            }
                          },
                          {
                            "1": "role",
                            "2": {
                              "7": {
                                "1": "Lactation Consultant"
                              }
                            }
                          },
                          {
                            "1": "img",
                            "2": {
                              "7": {
                                "1": "woman with calm expression"
                              }
                            }
                          }
                        ],
                        "5": "1168f59e-3f53-4266-950f-7047160be627"
                      }
                    ],
                    "5": "1d1db232-fccc-462e-8117-c79643020930"
                  }
                ],
                "5": "9b8897ba-c1ec-4248-a1f9-78e7c095be4a"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 40,
                        "2": 40,
                        "3": 0,
                        "4": 0
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 32,
                        "2": 24,
                        "3": 32,
                        "4": 24
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 8
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "align",
                            "2": {
                              "6": {
                                "1": "space_between"
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 0,
                                "2": 0,
                                "3": 16,
                                "4": 0
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Recent Discussions"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "title_medium"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              }
                            ],
                            "5": "3693b72b-d080-42d9-a4f0-f7df68a7f2fd"
                          },
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "tune_rounded"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              }
                            ],
                            "5": "a41a8caf-c25d-4245-b3c0-52b41f57acfd"
                          }
                        ],
                        "5": "3575d070-6a61-4581-b13b-861d186a919e"
                      },
                      {
                        "1": "@post_card",
                        "2": [
                          {
                            "1": "author_initials",
                            "2": {
                              "7": {
                                "1": "EM"
                              }
                            }
                          },
                          {
                            "1": "author_name",
                            "2": {
                              "7": {
                                "1": "Emily Myers"
                              }
                            }
                          },
                          {
                            "1": "time_ago",
                            "2": {
                              "7": {
                                "1": "2h ago"
                              }
                            }
                          },
                          {
                            "1": "title",
                            "2": {
                              "7": {
                                "1": "First trimester fatigue is real!"
                              }
                            }
                          },
                          {
                            "1": "preview",
                            "2": {
                              "7": {
                                "1": "I'm struggling to keep my eyes open by 2 PM. Does anyone have natural energy-boosting tips that are safe?"
                              }
                            }
                          },
                          {
                            "1": "likes",
                            "2": {
                              "7": {
                                "1": "24"
                              }
                            }
                          },
                          {
                            "1": "comments",
                            "2": {
                              "7": {
                                "1": "12"
                              }
                            }
                          },
                          {
                            "1": "tag",
                            "2": {
                              "7": {
                                "1": "Prenatal"
                              }
                            }
                          }
                        ],
                        "5": "348f1b63-7f29-4f47-a867-3546de36b4ec"
                      },
                      {
                        "1": "@post_card",
                        "2": [
                          {
                            "1": "author_initials",
                            "2": {
                              "7": {
                                "1": "JK"
                              }
                            }
                          },
                          {
                            "1": "author_name",
                            "2": {
                              "7": {
                                "1": "Jessica Knight"
                              }
                            }
                          },
                          {
                            "1": "time_ago",
                            "2": {
                              "7": {
                                "1": "5h ago"
                              }
                            }
                          },
                          {
                            "1": "title",
                            "2": {
                              "7": {
                                "1": "Postpartum Yoga: Week 4"
                              }
                            }
                          },
                          {
                            "1": "preview",
                            "2": {
                              "7": {
                                "1": "Just finished my first 'Root' session today. Feeling so much more connected to my body. Highly recommend the breathing exercises."
                              }
                            }
                          },
                          {
                            "1": "likes",
                            "2": {
                              "7": {
                                "1": "56"
                              }
                            }
                          },
                          {
                            "1": "comments",
                            "2": {
                              "7": {
                                "1": "8"
                              }
                            }
                          },
                          {
                            "1": "tag",
                            "2": {
                              "7": {
                                "1": "Yoga"
                              }
                            }
                          }
                        ],
                        "5": "56ec4021-b0b5-49fd-9b8d-f511f2d38a1a"
                      },
                      {
                        "1": "@post_card",
                        "2": [
                          {
                            "1": "author_initials",
                            "2": {
                              "7": {
                                "1": "AL"
                              }
                            }
                          },
                          {
                            "1": "author_name",
                            "2": {
                              "7": {
                                "1": "Aria Low"
                              }
                            }
                          },
                          {
                            "1": "time_ago",
                            "2": {
                              "7": {
                                "1": "1d ago"
                              }
                            }
                          },
                          {
                            "1": "title",
                            "2": {
                              "7": {
                                "1": "Healthy snack ideas?"
                              }
                            }
                          },
                          {
                            "1": "preview",
                            "2": {
                              "7": {
                                "1": "Looking for quick, nutrient-dense snacks for busy mornings. What are your go-to's lately?"
                              }
                            }
                          },
                          {
                            "1": "likes",
                            "2": {
                              "7": {
                                "1": "42"
                              }
                            }
                          },
                          {
                            "1": "comments",
                            "2": {
                              "7": {
                                "1": "31"
                              }
                            }
                          },
                          {
                            "1": "tag",
                            "2": {
                              "7": {
                                "1": "Nutrition"
                              }
                            }
                          }
                        ],
                        "5": "91367563-4d10-49f8-8b5e-cd316e9ee47a"
                      }
                    ],
                    "5": "091c2d5c-4820-4ad2-b8ba-16f8c706a7fa"
                  }
                ],
                "5": "798f9a85-79c8-410d-8d93-2fe3dae32b92"
              },
              {
                "1": "sizedbox",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  }
                ],
                "5": "57d5e420-25a2-46d6-b310-95beb6fd577f"
              }
            ],
            "5": "b89bc16d-058d-43ef-9afc-68ee7ba93b94"
          }
        ],
        "5": "dc318365-976e-40be-aae2-f0371f7fa174"
      },
      {
        "1": "fab",
        "2": [
          {
            "1": "icon",
            "2": {
              "11": {
                "1": "add"
              }
            }
          },
          {
            "1": "label",
            "2": {
              "7": {
                "1": "New Post"
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "primary"
              }
            }
          },
          {
            "1": "color",
            "2": {
              "4": {
                "1": "background"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 28,
                "2": 28,
                "3": 28,
                "4": 28
              }
            }
          },
          {
            "1": "align",
            "2": {
              "6": {
                "1": "bottom_right"
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          }
        ],
        "5": "fa99a51a-b9e5-4281-be22-c4a5acc53c18"
      }
    ],
    "5": "398c4db9-ea68-4a0d-aae0-fea2973737c8"
  },
  "2": [
    {
      "1": "category_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                },
                "3": {
                  "4": {
                    "1": "surface"
                  }
                }
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 10,
                "2": 20,
                "3": 10,
                "4": 20
              }
            }
          },
          {
            "1": "border",
            "2": {
              "23": {
                "1": 1,
                "2": {
                  "1": "selected",
                  "2": {
                    "7": {
                      "1": "primary"
                    }
                  },
                  "3": {
                    "7": {
                      "1": "divider"
                    }
                  }
                }
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 8,
                "3": 0,
                "4": 0
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 8
                  }
                }
              }
            ],
            "3": [
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "17": {
                        "1": "icon"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 18
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "4": {
                            "1": "background"
                          }
                        },
                        "3": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    }
                  }
                ],
                "5": "d89f1bc6-8514-44b0-b221-19eeb2d16b23"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "4": {
                            "1": "background"
                          }
                        },
                        "3": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "18": {
                        "1": "selected",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        },
                        "3": {
                          "10": {
                            "1": 400
                          }
                        }
                      }
                    }
                  },
                  {
                    "1": "font_size",
                    "2": {
                      "10": {
                        "1": 14
                      }
                    }
                  }
                ],
                "5": "cd5d9911-98d2-4e1b-b7a1-4ef5cda88989"
              }
            ],
            "5": "85208e0b-900d-4a1d-80b4-2d0cebf271be"
          }
        ],
        "5": "95958751-4a35-4fcc-9128-23bec78b7da9"
      }
    },
    {
      "1": "post_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 16,
                "4": 0
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "10": {
                    "1": 12
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 12
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "avatar",
                    "2": [
                      {
                        "1": "text",
                        "2": {
                          "17": {
                            "1": "author_initials"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "secondary"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 40
                          }
                        }
                      }
                    ],
                    "5": "ca96a7a9-0de3-4a34-baf9-28bd1898afb0"
                  },
                  {
                    "1": "expanded",
                    "3": [
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "17": {
                                    "1": "author_name"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "body_medium"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 600
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              }
                            ],
                            "5": "99c9eba2-0597-48af-a854-0dd69467f4a9"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "17": {
                                    "1": "time_ago"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              }
                            ],
                            "5": "01da4ef5-71e3-453a-8b87-3e82284341f0"
                          }
                        ],
                        "5": "3f1340ec-86a9-40e4-b322-e1d91a652f14"
                      }
                    ],
                    "5": "be8775ab-73de-4b31-9737-70045c3c75da"
                  },
                  {
                    "1": "icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "11": {
                            "1": "more_horiz"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "05655a09-9865-4782-a8d5-4e84bb9d7759"
                  }
                ],
                "5": "c8908199-2f6d-4733-ba3b-2f0ae8ecded5"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "title"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "title_medium"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 700
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  },
                  {
                    "1": "max_lines",
                    "2": {
                      "10": {
                        "1": 2
                      }
                    }
                  },
                  {
                    "1": "overflow",
                    "2": {
                      "7": {
                        "1": "ellipsis"
                      }
                    }
                  }
                ],
                "5": "51a01b9e-c79b-465c-a134-f201cef73622"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "preview"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "body_medium"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  },
                  {
                    "1": "max_lines",
                    "2": {
                      "10": {
                        "1": 3
                      }
                    }
                  },
                  {
                    "1": "overflow",
                    "2": {
                      "7": {
                        "1": "ellipsis"
                      }
                    }
                  },
                  {
                    "1": "line_height",
                    "2": {
                      "10": {
                        "1": 1.5
                      }
                    }
                  }
                ],
                "5": "e4729f32-2eb7-4274-9b4e-561c67f92d18"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 16
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 4
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "favorite_border_rounded"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 18
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "ae1b3219-efb0-47cb-86bb-387052a66999"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "likes"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "a28156dc-1d66-4c31-87dc-e260629e3aac"
                      }
                    ],
                    "5": "c14512fb-7339-4c79-8818-1ba599a46a32"
                  },
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 4
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "chat_bubble_outline_rounded"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 18
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "ab26f73c-8e55-4a27-ae9c-77399ca390b0"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "comments"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "e3c81cbd-ea10-4f3d-8d9e-f9463d7df96c"
                      }
                    ],
                    "5": "a1cde16c-77af-458a-931e-3b3cd6bad406"
                  },
                  {
                    "1": "spacer",
                    "5": "af32b18b-25b3-4f10-94e8-208470d9ae19"
                  },
                  {
                    "1": "chip",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "17": {
                            "1": "tag"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "background"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 12,
                            "2": 12,
                            "3": 12,
                            "4": 12
                          }
                        }
                      }
                    ],
                    "5": "af65205d-cdb1-4d50-bb11-f84770136a67"
                  }
                ],
                "5": "4d940a7d-8b18-4dbf-aebd-3b7424f259b6"
              }
            ],
            "5": "255dfc3b-5220-4538-a096-fbe1420f236d"
          }
        ],
        "5": "a8eb12f1-56b7-4c3a-9d0d-066fd920ef0e"
      }
    },
    {
      "1": "expert_highlight",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "width",
            "2": {
              "1": {
                "1": 280,
                "2": false
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "#E8DCC4"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 32,
                "2": 32,
                "3": 32,
                "4": 32
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 16,
                "3": 0,
                "4": 0
              }
            }
          },
          {
            "1": "clip",
            "2": {
              "9": {
                "1": true
              }
            }
          }
        ],
        "3": [
          {
            "1": "stack",
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 8
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#A8B5A0"
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 12,
                            "2": 12,
                            "3": 12,
                            "4": 12
                          }
                        }
                      },
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 4,
                            "2": 8,
                            "3": 4,
                            "4": 8
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Expert Q&A"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "background"
                              }
                            }
                          },
                          {
                            "1": "font_size",
                            "2": {
                              "10": {
                                "1": 10
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          }
                        ],
                        "5": "48c64344-7585-4b61-aeea-28037e52de62"
                      }
                    ],
                    "5": "92404cd8-36a0-4772-8643-0ce3a2312e84"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "17": {
                            "1": "title"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_small"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      },
                      {
                        "1": "max_lines",
                        "2": {
                          "10": {
                            "1": 2
                          }
                        }
                      }
                    ],
                    "5": "fbcca677-b874-42c8-82a6-2b2445aa5691"
                  },
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 8
                          }
                        }
                      },
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 8,
                            "2": 0,
                            "3": 0,
                            "4": 0
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "avatar",
                        "2": [
                          {
                            "1": "source_desc",
                            "2": {
                              "17": {
                                "1": "img"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 32
                              }
                            }
                          }
                        ],
                        "5": "7f49f81d-c9c7-4194-8a72-a47e783aba54"
                      },
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "17": {
                                    "1": "name"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_medium"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 600
                                  }
                                }
                              }
                            ],
                            "5": "8a9135ad-c6b1-416f-81cf-80a5fc4f9b12"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "17": {
                                    "1": "role"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              }
                            ],
                            "5": "d3550567-201e-46e9-84f1-0b78ab585564"
                          }
                        ],
                        "5": "2ae92143-459b-4cc7-bd55-665256f12468"
                      }
                    ],
                    "5": "67806b2b-30a4-44ac-980a-a9fd949d5f55"
                  }
                ],
                "5": "cafd023b-16c6-4da0-b44a-edebfc4b3247"
              }
            ],
            "5": "112aaf4c-d854-43cb-9046-102e23fa1a54"
          }
        ],
        "5": "f20528b5-0c75-4376-a30a-48f246358065"
      }
    }
  ]
}
```

### 8. Smart Recommendations

- Frame ID: `a8116e31-c494-4941-9650-5170f34c99e8`
- Original page prompt: "A curated list of articles and exercises based on user data"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "#FAF7F2"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "xl"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "space_between"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "xs"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "For You, Mama"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "headline_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 800
                          }
                        }
                      }
                    ],
                    "5": "a696f918-fc0c-47a0-9ae0-8c249761eabf"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Based on your week 24 progress"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "a65f2530-fb00-4188-bd83-773cd5ee6786"
                  }
                ],
                "5": "451ea3e5-ae10-432f-b5e4-495e6fd81cf7"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 52,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 52,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 22,
                        "2": 22,
                        "3": 22,
                        "4": 22
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "#E8DCC4"
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 2,
                        "2": "#FAF7F2"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "avatar",
                    "2": [
                      {
                        "1": "text",
                        "2": {
                          "7": {
                            "1": "SJ"
                          }
                        }
                      },
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "#A8B5A0"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "#FAF7F2"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 44
                          }
                        }
                      }
                    ],
                    "5": "a69e5a73-f456-4512-ac40-a532dae02384"
                  }
                ],
                "5": "018dc9b9-230f-4943-be1e-91c361fa2e14"
              }
            ],
            "5": "434a6ad8-fc41-4315-ad3e-c9faf8dc52d2"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "#E8DCC4"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 32,
                    "2": 32,
                    "3": 32,
                    "4": 32
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 24,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              },
              {
                "1": "width",
                "2": {
                  "1": {
                    "1": "Infinity",
                    "2": true
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 16,
                                "2": 16,
                                "3": 16,
                                "4": 16
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 12,
                                "2": 12,
                                "3": 12,
                                "4": 12
                              }
                            }
                          },
                          {
                            "1": "align_child",
                            "2": {
                              "6": {
                                "1": "center"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "self_improvement_rounded"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "#A8B5A0"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "10": {
                                    "1": 28
                                  }
                                }
                              }
                            ],
                            "5": "d79be540-ec33-43ca-b736-9f977b07dad0"
                          }
                        ],
                        "5": "3be6f46e-3252-4ed0-8f3a-b3f536fd07d3"
                      },
                      {
                        "1": "expanded",
                        "3": [
                          {
                            "1": "column",
                            "2": [
                              {
                                "1": "cross_align",
                                "2": {
                                  "6": {
                                    "1": "start"
                                  }
                                }
                              },
                              {
                                "1": "spacing",
                                "2": {
                                  "7": {
                                    "1": "xs"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "Daily Harmony"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "title_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 700
                                      }
                                    }
                                  }
                                ],
                                "5": "a5bef184-798e-4b50-a4e2-327c9a93d53c"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "Your energy levels are peaking today. Perfect for a gentle flow."
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "body_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "90270a23-e4e1-4ce3-9efa-5574c2856fee"
                              }
                            ],
                            "5": "da7a6fb5-3b65-44fc-a400-25d1cd4b893b"
                          }
                        ],
                        "5": "8c1df3bb-228a-4afa-9121-2489a8f55387"
                      }
                    ],
                    "5": "6ba5bd4c-03f8-4b7f-ba61-ec0d90fd5ebb"
                  },
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "sm"
                          }
                        }
                      },
                      {
                        "1": "scroll",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "@insight_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Energy: High"
                              }
                            }
                          },
                          {
                            "1": "icon",
                            "2": {
                              "7": {
                                "1": "lightning_bolt_rounded"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "border",
                            "2": {
                              "4": {
                                "1": "#A8B5A0"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#A8B5A0"
                              }
                            }
                          }
                        ],
                        "5": "7dc9cbba-0ff1-48ae-add4-a77c570bd65d"
                      },
                      {
                        "1": "@insight_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Calm"
                              }
                            }
                          },
                          {
                            "1": "icon",
                            "2": {
                              "7": {
                                "1": "auto_awesome_rounded"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "border",
                            "2": {
                              "4": {
                                "1": "#D4A5A0"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#D4A5A5"
                              }
                            }
                          }
                        ],
                        "5": "b515934b-cb33-4369-b443-7dcc3a092091"
                      },
                      {
                        "1": "@insight_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Active"
                              }
                            }
                          },
                          {
                            "1": "icon",
                            "2": {
                              "7": {
                                "1": "directions_run_rounded"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "border",
                            "2": {
                              "4": {
                                "1": "#E8DCC4"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "7": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "09b09f8d-5c4f-44a7-be85-e6819420b044"
                      }
                    ],
                    "5": "8fa3416f-5556-4636-ac8b-b3e36383232c"
                  }
                ],
                "5": "4d6cf9b7-aefb-4209-9e6d-04dda5dee8d9"
              }
            ],
            "5": "2a1405ba-01ed-47e8-a408-be8e2d566986"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Curated Exercises"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      }
                    ],
                    "5": "cf8378f4-330e-4735-87d4-1b4e317c84fa"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "See All"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "#A8B5A0"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      }
                    ],
                    "5": "de9a035f-d8fd-41dd-98c5-bb6b30b9f5a2"
                  }
                ],
                "5": "f260b6e2-69d7-4e9c-99f9-1255d49c0cd5"
              },
              {
                "1": "@recommendation_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Pelvic Floor Connection"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Gentle breathwork and engagement for your second trimester."
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "woman doing gentle yoga in a sunlit warm room"
                      }
                    }
                  },
                  {
                    "1": "tag",
                    "2": {
                      "7": {
                        "1": "Yoga"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "spa_rounded"
                      }
                    }
                  },
                  {
                    "1": "duration",
                    "2": {
                      "7": {
                        "1": "12 min"
                      }
                    }
                  }
                ],
                "5": "1070c431-4b42-465f-a3f7-9e298df6daae"
              },
              {
                "1": "@recommendation_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Nourishing Your Root"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "Expert advice on iron-rich foods and hydration for energy."
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "healthy organic vegetable bowl with seeds"
                      }
                    }
                  },
                  {
                    "1": "tag",
                    "2": {
                      "7": {
                        "1": "Nutrition"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "restaurant_rounded"
                      }
                    }
                  },
                  {
                    "1": "duration",
                    "2": {
                      "7": {
                        "1": "5 min read"
                      }
                    }
                  }
                ],
                "5": "dc2b429c-ff18-41ab-8368-1bd9337d0771"
              },
              {
                "1": "@recommendation_card",
                "2": [
                  {
                    "1": "title",
                    "2": {
                      "7": {
                        "1": "Restorative Sleep Meditation"
                      }
                    }
                  },
                  {
                    "1": "subtitle",
                    "2": {
                      "7": {
                        "1": "A guided journey to help you find deep rest tonight."
                      }
                    }
                  },
                  {
                    "1": "img_desc",
                    "2": {
                      "7": {
                        "1": "soft abstract watercolor clouds pink and cream"
                      }
                    }
                  },
                  {
                    "1": "tag",
                    "2": {
                      "7": {
                        "1": "Mindset"
                      }
                    }
                  },
                  {
                    "1": "icon",
                    "2": {
                      "7": {
                        "1": "nightlight_round"
                      }
                    }
                  },
                  {
                    "1": "duration",
                    "2": {
                      "7": {
                        "1": "15 min"
                      }
                    }
                  }
                ],
                "5": "0abbdfde-82ea-400c-b787-b3282ee5d827"
              }
            ],
            "5": "01d9a281-3acd-4ad4-b0d7-459e4e3b5047"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "surface"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 32,
                    "2": 32,
                    "3": 32,
                    "4": 32
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 24,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              },
              {
                "1": "border",
                "2": {
                  "22": {
                    "1": 1,
                    "2": "#E8DCC4"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "space_between"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Weekly Activity"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "title_medium"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 700
                                  }
                                }
                              }
                            ],
                            "5": "504f23d2-8d27-477d-b93b-2afc7bee25e1"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "You've met 80% of your goal"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "body_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              }
                            ],
                            "5": "476c7e9a-9a03-447c-9a57-295dd099e894"
                          }
                        ],
                        "5": "da6057c6-9e74-4a78-a150-e67d5acffef6"
                      },
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "insights_rounded"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#A8B5A0"
                              }
                            }
                          }
                        ],
                        "5": "436e72a1-b803-4b8b-91e1-83fd0638b68e"
                      }
                    ],
                    "5": "517cd938-0772-4770-97e9-001e89a626c7"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 180,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": "Infinity",
                            "2": true
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "bar_chart",
                        "2": [
                          {
                            "1": "data",
                            "2": {
                              "7": {
                                "1": "65,40,85,70,90,30,50"
                              }
                            }
                          },
                          {
                            "1": "labels",
                            "2": {
                              "7": {
                                "1": "M,T,W,T,F,S,S"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#A8B5A0"
                              }
                            }
                          },
                          {
                            "1": "bar_width",
                            "2": {
                              "10": {
                                "1": 14
                              }
                            }
                          },
                          {
                            "1": "bar_radius",
                            "2": {
                              "10": {
                                "1": 8
                              }
                            }
                          },
                          {
                            "1": "show_grid",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "f16b84c7-9cb8-4908-ab00-a9650881d292"
                      }
                    ],
                    "5": "189ba8bf-a5d6-4196-a465-1719a782f518"
                  }
                ],
                "5": "6ed9b10f-ac16-471e-8ee5-2294e64ac0bd"
              }
            ],
            "5": "ab7747f9-4b52-4a86-a826-d69f182366d2"
          },
          {
            "1": "container",
            "2": [
              {
                "1": "bg",
                "2": {
                  "4": {
                    "1": "#D4A5A5"
                  }
                }
              },
              {
                "1": "radius",
                "2": {
                  "16": {
                    "1": 32,
                    "2": 32,
                    "3": 32,
                    "4": 32
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 24,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              },
              {
                "1": "width",
                "2": {
                  "1": {
                    "1": "Infinity",
                    "2": true
                  }
                }
              },
              {
                "1": "clip",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              }
            ],
            "3": [
              {
                "1": "stack",
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "2": {
                              "1": 1.5,
                              "2": 1.5
                            }
                          }
                        }
                      },
                      {
                        "1": "opacity",
                        "2": {
                          "10": {
                            "1": 0.2
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "favorite_rounded"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 120
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          }
                        ],
                        "5": "af8ea508-abba-4963-abb3-6b2f91e40096"
                      }
                    ],
                    "5": "c8c9187e-93e0-4bdc-80ac-0482207462d0"
                  },
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Join the Village"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          }
                        ],
                        "5": "d70f904d-7bc6-4894-8961-3be4334ceba1"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Connect with other mamas in week 24 to share experiences and tips."
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "opacity",
                            "2": {
                              "10": {
                                "1": 0.9
                              }
                            }
                          }
                        ],
                        "5": "51c20d7e-65d2-4e88-b45b-1aeff29367fe"
                      },
                      {
                        "1": "button",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Open Community"
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "#D4A5A5"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 16,
                                "2": 16,
                                "3": 16,
                                "4": 16
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "7": {
                                "1": "small"
                              }
                            }
                          }
                        ],
                        "5": "2fd6457b-fdc0-47e9-bb9c-14663fc876ab"
                      }
                    ],
                    "5": "381df8a3-c70a-4c01-acc7-5f72caa9da93"
                  }
                ],
                "5": "49aa285d-55f2-4bef-9e2c-5513555d60e2"
              }
            ],
            "5": "2dfbf7af-1046-4951-959a-af861984c080"
          },
          {
            "1": "sizedbox",
            "2": [
              {
                "1": "height",
                "2": {
                  "7": {
                    "1": "lg"
                  }
                }
              }
            ],
            "5": "c16ad4bd-c7af-4162-9e04-3cea23ea6f94"
          }
        ],
        "5": "1439444a-1817-4568-ab2a-d116db89d0ef"
      }
    ],
    "5": "c2c247cf-478c-4248-9890-3cf4c4c51fed"
  },
  "2": [
    {
      "1": "recommendation_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 32,
                "2": 32,
                "3": 32,
                "4": 32
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "lg"
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          },
          {
            "1": "clip",
            "2": {
              "9": {
                "1": true
              }
            }
          }
        ],
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "start"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "stack",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": "Infinity",
                        "2": true
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 160,
                        "2": false
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 24,
                            "2": 24,
                            "3": 24,
                            "4": 24
                          }
                        }
                      },
                      {
                        "1": "clip",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": "Infinity",
                            "2": true
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 160,
                            "2": false
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "image",
                        "2": [
                          {
                            "1": "source_desc",
                            "2": {
                              "17": {
                                "1": "img_desc"
                              }
                            }
                          },
                          {
                            "1": "fit",
                            "2": {
                              "7": {
                                "1": "cover"
                              }
                            }
                          },
                          {
                            "1": "width",
                            "2": {
                              "1": {
                                "1": "Infinity",
                                "2": true
                              }
                            }
                          },
                          {
                            "1": "height",
                            "2": {
                              "1": {
                                "1": 160,
                                "2": false
                              }
                            }
                          }
                        ],
                        "5": "d2269e7f-4a8a-4469-b26f-e77b33545e48"
                      }
                    ],
                    "5": "d0f6c0e8-f293-43b7-b7ef-bae61c7c1a8f"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "top_right"
                          }
                        }
                      },
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "5": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "#FAF7F2CC"
                              }
                            }
                          },
                          {
                            "1": "backdrop_blur",
                            "2": {
                              "10": {
                                "1": 8
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 16,
                                "2": 16,
                                "3": 16,
                                "4": 16
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 8,
                                "2": 12,
                                "3": 8,
                                "4": 12
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "7": {
                                    "1": "xs"
                                  }
                                }
                              },
                              {
                                "1": "main_size",
                                "2": {
                                  "7": {
                                    "1": "min"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "icon",
                                "2": [
                                  {
                                    "1": "name",
                                    "2": {
                                      "17": {
                                        "1": "icon"
                                      }
                                    }
                                  },
                                  {
                                    "1": "size",
                                    "2": {
                                      "10": {
                                        "1": 16
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary"
                                      }
                                    }
                                  }
                                ],
                                "5": "d15f66a0-1f9b-4694-a559-77a9c43c2b19"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "17": {
                                        "1": "tag"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "7": {
                                        "1": "bold"
                                      }
                                    }
                                  }
                                ],
                                "5": "40d648e4-af9e-4efe-823b-c5e19f90d776"
                              }
                            ],
                            "5": "d1361a62-ee20-4579-8a79-e0e382375710"
                          }
                        ],
                        "5": "0eb40121-51fd-4356-97c0-fb1481738169"
                      }
                    ],
                    "5": "e8505336-15c0-4379-a3df-8297254ced59"
                  }
                ],
                "5": "b8308f60-5f1c-4249-8c0d-e317796d251c"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "xs"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "17": {
                            "1": "title"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      },
                      {
                        "1": "max_lines",
                        "2": {
                          "10": {
                            "1": 2
                          }
                        }
                      },
                      {
                        "1": "overflow",
                        "2": {
                          "7": {
                            "1": "ellipsis"
                          }
                        }
                      }
                    ],
                    "5": "c46a9ea4-1f78-438e-806f-c03eba724af0"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "17": {
                            "1": "subtitle"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_small"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      },
                      {
                        "1": "max_lines",
                        "2": {
                          "10": {
                            "1": 2
                          }
                        }
                      },
                      {
                        "1": "overflow",
                        "2": {
                          "7": {
                            "1": "ellipsis"
                          }
                        }
                      }
                    ],
                    "5": "c0edffaf-f802-48e7-805b-93515b6709f4"
                  }
                ],
                "5": "88c30a4f-33e7-4bcc-a9a2-86ad0b4e52e2"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "schedule_rounded"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 14
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "hint"
                              }
                            }
                          }
                        ],
                        "5": "d1ea01d2-3833-4b78-8480-ca23813e1bf6"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "duration"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "hint"
                              }
                            }
                          }
                        ],
                        "5": "69afea5e-b7cd-4846-94be-414e84ed2979"
                      }
                    ],
                    "5": "3c477e22-194b-42c0-844b-096764f3fd82"
                  },
                  {
                    "1": "button",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Start Now"
                          }
                        }
                      },
                      {
                        "1": "variant",
                        "2": {
                          "7": {
                            "1": "text"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 700
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "7": {
                            "1": "small"
                          }
                        }
                      }
                    ],
                    "5": "4c9388c2-e51f-472d-b7bf-07fa25b9667c"
                  }
                ],
                "5": "574a3ade-10f1-4a9b-ba81-089f4a19f64d"
              }
            ],
            "5": "cf5740f6-f11c-4ba6-b86c-2857be890815"
          }
        ],
        "5": "7bdd7aae-87c1-49e9-ae07-94848d61717c"
      }
    },
    {
      "1": "insight_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "17": {
                "1": "bg"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 20,
                "2": 20,
                "3": 20,
                "4": 20
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 10,
                "2": 16,
                "3": 10,
                "4": 16
              }
            }
          },
          {
            "1": "border",
            "2": {
              "24": {
                "1": 1,
                "2": "border"
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                }
              },
              {
                "1": "main_size",
                "2": {
                  "7": {
                    "1": "min"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "17": {
                        "1": "icon"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 18
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "17": {
                        "1": "color"
                      }
                    }
                  }
                ],
                "5": "dcf45df4-3626-4038-88af-be71a6012276"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "label_medium"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "17": {
                        "1": "color"
                      }
                    }
                  },
                  {
                    "1": "font_weight",
                    "2": {
                      "10": {
                        "1": 600
                      }
                    }
                  }
                ],
                "5": "d86e6c67-257c-46c7-abeb-7b6f7f040fa6"
              }
            ],
            "5": "5591071a-fa6a-4a9f-89e5-526eaf9c0f44"
          }
        ],
        "5": "65fc8afd-6d7f-4315-9c12-3ec8df622847"
      }
    }
  ]
}
```

### 9. Meditation Hub

- Frame ID: `037b93ac-2fa8-4252-b01f-e2bff9b2c89e`
- Original page prompt: "A library of calming audio meditations for emotional well-being"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "stack",
        "3": [
          {
            "1": "stack",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "top_left"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "@organic_blob",
                "2": [
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 300
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "7": {
                        "1": "primary"
                      }
                    }
                  },
                  {
                    "1": "r1",
                    "2": {
                      "10": {
                        "1": 150
                      }
                    }
                  },
                  {
                    "1": "r2",
                    "2": {
                      "10": {
                        "1": 200
                      }
                    }
                  },
                  {
                    "1": "r3",
                    "2": {
                      "10": {
                        "1": 120
                      }
                    }
                  },
                  {
                    "1": "r4",
                    "2": {
                      "10": {
                        "1": 180
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "2": {
                          "1": -1.2,
                          "2": -0.5
                        }
                      }
                    }
                  }
                ],
                "5": "10441837-6ec2-4b12-8e36-9919aaf8016a"
              },
              {
                "1": "@organic_blob",
                "2": [
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 250
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "7": {
                        "1": "accent"
                      }
                    }
                  },
                  {
                    "1": "r1",
                    "2": {
                      "10": {
                        "1": 180
                      }
                    }
                  },
                  {
                    "1": "r2",
                    "2": {
                      "10": {
                        "1": 100
                      }
                    }
                  },
                  {
                    "1": "r3",
                    "2": {
                      "10": {
                        "1": 220
                      }
                    }
                  },
                  {
                    "1": "r4",
                    "2": {
                      "10": {
                        "1": 140
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "2": {
                          "1": 1.5,
                          "2": 0.2
                        }
                      }
                    }
                  }
                ],
                "5": "68abe58e-d2bc-4833-a493-ed7f2ab6ff39"
              },
              {
                "1": "@organic_blob",
                "2": [
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 200
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "7": {
                        "1": "secondary"
                      }
                    }
                  },
                  {
                    "1": "r1",
                    "2": {
                      "10": {
                        "1": 100
                      }
                    }
                  },
                  {
                    "1": "r2",
                    "2": {
                      "10": {
                        "1": 150
                      }
                    }
                  },
                  {
                    "1": "r3",
                    "2": {
                      "10": {
                        "1": 80
                      }
                    }
                  },
                  {
                    "1": "r4",
                    "2": {
                      "10": {
                        "1": 120
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "2": {
                          "1": 0.5,
                          "2": 1.2
                        }
                      }
                    }
                  }
                ],
                "5": "734527b3-4fc7-4683-8aa1-07df6ee67161"
              }
            ],
            "5": "ff7929ae-1876-471f-9bd9-6e6b5f28858a"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "scroll",
                "2": {
                  "9": {
                    "1": true
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 24,
                    "2": 24,
                    "3": 24,
                    "4": 24
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "xl"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "stretch"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "space_between"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Inner Peace"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "headline_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 700
                              }
                            }
                          }
                        ],
                        "5": "d78103de-647f-47eb-a1f3-020048f1cc5d"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Find your calm today, Sarah"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "body_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "026d5b91-5f42-43a5-b329-9154d3bacbad"
                      }
                    ],
                    "5": "639ee971-c26e-44ce-b135-85fc81a393c2"
                  },
                  {
                    "1": "container",
                    "2": [
                      {
                        "1": "bg",
                        "2": {
                          "4": {
                            "1": "surface"
                          }
                        }
                      },
                      {
                        "1": "radius",
                        "2": {
                          "16": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "5": "full"
                          }
                        }
                      },
                      {
                        "1": "padding",
                        "2": {
                          "5": {
                            "1": 4,
                            "2": 4,
                            "3": 4,
                            "4": 4
                          }
                        }
                      },
                      {
                        "1": "border",
                        "2": {
                          "22": {
                            "1": 1,
                            "2": "divider"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "avatar",
                        "2": [
                          {
                            "1": "source_desc",
                            "2": {
                              "12": {
                                "1": 3,
                                "2": "gentle portrait of a woman"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 44
                              }
                            }
                          }
                        ],
                        "5": "e5f57ab8-0f9a-4667-bf8c-1d74a881506c"
                      }
                    ],
                    "5": "975ba8d3-a108-4b9c-b959-1ebce344f9a4"
                  }
                ],
                "5": "ae085b5e-544f-4a4a-be84-00d94e82797a"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 240,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 32,
                        "2": 32,
                        "3": 32,
                        "4": 32
                      }
                    }
                  },
                  {
                    "1": "clip",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "shadow",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "stack",
                    "2": [
                      {
                        "1": "fit",
                        "2": {
                          "7": {
                            "1": "expand"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "image",
                        "2": [
                          {
                            "1": "source_desc",
                            "2": {
                              "12": {
                                "1": 3,
                                "2": "serene morning mist over a calm lake with lily pads"
                              }
                            }
                          },
                          {
                            "1": "fit",
                            "2": {
                              "7": {
                                "1": "cover"
                              }
                            }
                          }
                        ],
                        "5": "810a53cd-c194-4739-8e3e-9324632791b7"
                      },
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "gradient",
                            "2": {
                              "15": {
                                "1": 1,
                                "2": "to_top",
                                "3": [
                                  {
                                    "1": "#4A5D45AA",
                                    "2": 0
                                  },
                                  {
                                    "1": "transparent",
                                    "2": 70
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        "5": "d9d29cc8-fb3f-42e0-be8d-7b67ee3e1574"
                      },
                      {
                        "1": "column",
                        "2": [
                          {
                            "1": "align",
                            "2": {
                              "6": {
                                "1": "bottom_left"
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 24,
                                "2": 24,
                                "3": 24,
                                "4": 24
                              }
                            }
                          },
                          {
                            "1": "spacing",
                            "2": {
                              "7": {
                                "1": "sm"
                              }
                            }
                          },
                          {
                            "1": "cross_align",
                            "2": {
                              "6": {
                                "1": "start"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "container",
                            "2": [
                              {
                                "1": "bg",
                                "2": {
                                  "4": {
                                    "1": "accent"
                                  }
                                }
                              },
                              {
                                "1": "radius",
                                "2": {
                                  "16": {
                                    "1": 0,
                                    "2": 0,
                                    "3": 0,
                                    "4": 0,
                                    "5": "full"
                                  }
                                }
                              },
                              {
                                "1": "padding",
                                "2": {
                                  "5": {
                                    "1": 0,
                                    "2": 0,
                                    "3": 0,
                                    "4": 0,
                                    "6": "xs",
                                    "7": "md",
                                    "8": "xs",
                                    "9": "md"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "DAILY CALM"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 700
                                      }
                                    }
                                  }
                                ],
                                "5": "b987df62-98f2-46d8-bdbb-27c79f8f934b"
                              }
                            ],
                            "5": "8cd312e0-ff7c-42ff-b336-854b8f990491"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Nurturing Your Roots"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "title_large"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "background"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 600
                                  }
                                }
                              }
                            ],
                            "5": "e7705803-fe3c-4649-bb67-392da501bc03"
                          },
                          {
                            "1": "row",
                            "2": [
                              {
                                "1": "spacing",
                                "2": {
                                  "7": {
                                    "1": "md"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "row",
                                "2": [
                                  {
                                    "1": "spacing",
                                    "2": {
                                      "7": {
                                        "1": "xs"
                                      }
                                    }
                                  }
                                ],
                                "3": [
                                  {
                                    "1": "icon",
                                    "2": [
                                      {
                                        "1": "name",
                                        "2": {
                                          "11": {
                                            "1": "schedule_rounded"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "background"
                                          }
                                        }
                                      },
                                      {
                                        "1": "size",
                                        "2": {
                                          "10": {
                                            "1": 16
                                          }
                                        }
                                      }
                                    ],
                                    "5": "9627ff1f-1a44-48f4-b3d9-81a5ae2a922e"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "12 min"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "background"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "label_medium"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "837d8919-10ab-4711-9ed1-8e2f51140b14"
                                  }
                                ],
                                "5": "99266456-3c38-48f0-a931-3aa1061b41ca"
                              },
                              {
                                "1": "row",
                                "2": [
                                  {
                                    "1": "spacing",
                                    "2": {
                                      "7": {
                                        "1": "xs"
                                      }
                                    }
                                  }
                                ],
                                "3": [
                                  {
                                    "1": "icon",
                                    "2": [
                                      {
                                        "1": "name",
                                        "2": {
                                          "11": {
                                            "1": "favorite_rounded"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "background"
                                          }
                                        }
                                      },
                                      {
                                        "1": "size",
                                        "2": {
                                          "10": {
                                            "1": 16
                                          }
                                        }
                                      }
                                    ],
                                    "5": "c9cdf2cc-a41e-4551-993f-45f9a445f3c2"
                                  },
                                  {
                                    "1": "text",
                                    "2": [
                                      {
                                        "1": "content",
                                        "2": {
                                          "7": {
                                            "1": "Deep Relaxation"
                                          }
                                        }
                                      },
                                      {
                                        "1": "color",
                                        "2": {
                                          "4": {
                                            "1": "background"
                                          }
                                        }
                                      },
                                      {
                                        "1": "style",
                                        "2": {
                                          "13": {
                                            "1": "label_medium"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "7dbcc639-f6ab-45de-a858-d21e340d612f"
                                  }
                                ],
                                "5": "b963baff-ce58-4f4b-a2d1-ac67cdce0e9d"
                              }
                            ],
                            "5": "d4a407a4-dbc5-4fc3-ab3c-173af98810fc"
                          },
                          {
                            "1": "button",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Start Meditation"
                                  }
                                }
                              },
                              {
                                "1": "bg",
                                "2": {
                                  "4": {
                                    "1": "background"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "icon",
                                "2": {
                                  "11": {
                                    "1": "play_arrow_rounded"
                                  }
                                }
                              },
                              {
                                "1": "radius",
                                "2": {
                                  "16": {
                                    "1": 0,
                                    "2": 0,
                                    "3": 0,
                                    "4": 0,
                                    "5": "full"
                                  }
                                }
                              },
                              {
                                "1": "content_padding",
                                "2": {
                                  "5": {
                                    "1": 0,
                                    "2": 0,
                                    "3": 0,
                                    "4": 0,
                                    "6": "lg",
                                    "7": "sm",
                                    "8": "lg",
                                    "9": "sm"
                                  }
                                }
                              }
                            ],
                            "5": "ce069073-3829-4559-b477-1075969235bc"
                          }
                        ],
                        "5": "97fa67c9-3b7b-46e3-83bb-8479e720785c"
                      }
                    ],
                    "5": "12d86a9a-f39c-433c-b4d7-0cb3eb739195"
                  }
                ],
                "5": "c8221218-786f-4147-8e63-eca76eebe026"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Browse by Mood"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "title_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "font_weight",
                        "2": {
                          "10": {
                            "1": 600
                          }
                        }
                      }
                    ],
                    "5": "dfe36df7-bae7-4c0a-b63a-2d9a943aae6d"
                  },
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "scroll",
                        "2": {
                          "9": {
                            "1": true
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "10": {
                            "1": 0
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "@meditation_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "All"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          }
                        ],
                        "5": "cb356075-ee40-4c69-ad7f-caac212a317c"
                      },
                      {
                        "1": "@meditation_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Sleep"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "74f5758d-18ca-40fe-aa2c-5fea1978fb08"
                      },
                      {
                        "1": "@meditation_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Anxiety"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "f8d21197-9836-42a6-84a3-0b2749f7be96"
                      },
                      {
                        "1": "@meditation_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Fertility"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "241dc3ac-5db9-425e-a279-3109a154aabd"
                      },
                      {
                        "1": "@meditation_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Postnatal"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "5f6af324-1d86-417a-a094-7410348b54b5"
                      },
                      {
                        "1": "@meditation_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Energy"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "f93a2731-50c6-442d-a130-7f9da5050a77"
                      }
                    ],
                    "5": "8db36b01-3514-44ea-8e8c-5e6d2f3772f5"
                  }
                ],
                "5": "44d10ff1-9890-49bc-bf68-0977ab4aceb0"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "10": {
                        "1": 0
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "stretch"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "align",
                        "2": {
                          "6": {
                            "1": "space_between"
                          }
                        }
                      },
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      },
                      {
                        "1": "margin",
                        "2": {
                          "5": {
                            "1": 0,
                            "2": 0,
                            "3": 0,
                            "4": 0,
                            "8": "md"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Recommended for You"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          }
                        ],
                        "5": "69e68f4e-e5c9-47ee-8560-84959533a284"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "See All"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_large"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          }
                        ],
                        "5": "5d41b401-7c32-4db8-8459-edd350c7bf0e"
                      }
                    ],
                    "5": "b70f7d44-8eb1-44b7-8841-f22ff5d1aef5"
                  },
                  {
                    "1": "@meditation_card",
                    "2": [
                      {
                        "1": "title",
                        "2": {
                          "7": {
                            "1": "Morning Affirmations"
                          }
                        }
                      },
                      {
                        "1": "duration",
                        "2": {
                          "7": {
                            "1": "8 min"
                          }
                        }
                      },
                      {
                        "1": "category",
                        "2": {
                          "7": {
                            "1": "Mindfulness"
                          }
                        }
                      },
                      {
                        "1": "img_desc",
                        "2": {
                          "7": {
                            "1": "soft sunrise through flowing linen curtains"
                          }
                        }
                      }
                    ],
                    "5": "138d1c67-f081-4a5f-acdd-5ebbcff06ac9"
                  },
                  {
                    "1": "@meditation_card",
                    "2": [
                      {
                        "1": "title",
                        "2": {
                          "7": {
                            "1": "Connecting with Baby"
                          }
                        }
                      },
                      {
                        "1": "duration",
                        "2": {
                          "7": {
                            "1": "15 min"
                          }
                        }
                      },
                      {
                        "1": "category",
                        "2": {
                          "7": {
                            "1": "Prenatal"
                          }
                        }
                      },
                      {
                        "1": "img_desc",
                        "2": {
                          "7": {
                            "1": "abstract soft watercolor of a circle and flower"
                          }
                        }
                      }
                    ],
                    "5": "84e9db30-eb11-4968-8a3a-d12b0efdfbc1"
                  },
                  {
                    "1": "@meditation_card",
                    "2": [
                      {
                        "1": "title",
                        "2": {
                          "7": {
                            "1": "Restorative Sleep"
                          }
                        }
                      },
                      {
                        "1": "duration",
                        "2": {
                          "7": {
                            "1": "20 min"
                          }
                        }
                      },
                      {
                        "1": "category",
                        "2": {
                          "7": {
                            "1": "Sleep"
                          }
                        }
                      },
                      {
                        "1": "img_desc",
                        "2": {
                          "7": {
                            "1": "crescent moon in a starry indigo sky hand drawn style"
                          }
                        }
                      }
                    ],
                    "5": "b550ae71-3821-4fe1-bb64-92f9e078f8b5"
                  },
                  {
                    "1": "@meditation_card",
                    "2": [
                      {
                        "1": "title",
                        "2": {
                          "7": {
                            "1": "Release & Let Go"
                          }
                        }
                      },
                      {
                        "1": "duration",
                        "2": {
                          "7": {
                            "1": "10 min"
                          }
                        }
                      },
                      {
                        "1": "category",
                        "2": {
                          "7": {
                            "1": "Emotional Health"
                          }
                        }
                      },
                      {
                        "1": "img_desc",
                        "2": {
                          "7": {
                            "1": "gentle waves on a sandy beach top view"
                          }
                        }
                      }
                    ],
                    "5": "f520d713-3219-4786-9eb6-65a0a5d2f0c8"
                  }
                ],
                "5": "14409b1e-e2b4-4ecd-abfd-377a8769a6cc"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "secondary"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 24,
                        "2": 24,
                        "3": 24,
                        "4": 24
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "lg"
                      }
                    }
                  },
                  {
                    "1": "margin",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "8": "xl"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "lg"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "background"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 16,
                                "2": 16,
                                "3": 16,
                                "4": 16
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "md"
                              }
                            }
                          },
                          {
                            "1": "align_child",
                            "2": {
                              "6": {
                                "1": "center"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "bar_chart_rounded"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "10": {
                                    "1": 32
                                  }
                                }
                              }
                            ],
                            "5": "ed2b7158-9684-4541-adef-68a6deb68083"
                          }
                        ],
                        "5": "16d6ef7d-10f4-4672-83cc-22638b8638c6"
                      },
                      {
                        "1": "expanded",
                        "3": [
                          {
                            "1": "column",
                            "2": [
                              {
                                "1": "cross_align",
                                "2": {
                                  "6": {
                                    "1": "start"
                                  }
                                }
                              },
                              {
                                "1": "spacing",
                                "2": {
                                  "7": {
                                    "1": "xs"
                                  }
                                }
                              }
                            ],
                            "3": [
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "You've found 120 minutes of peace this week"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "body_medium"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "primary_text"
                                      }
                                    }
                                  },
                                  {
                                    "1": "font_weight",
                                    "2": {
                                      "10": {
                                        "1": 500
                                      }
                                    }
                                  }
                                ],
                                "5": "429a6099-2e63-4153-adeb-7e008d63e171"
                              },
                              {
                                "1": "container",
                                "2": [
                                  {
                                    "1": "height",
                                    "2": {
                                      "1": {
                                        "1": 8,
                                        "2": false
                                      }
                                    }
                                  },
                                  {
                                    "1": "bg",
                                    "2": {
                                      "4": {
                                        "1": "background"
                                      }
                                    }
                                  },
                                  {
                                    "1": "radius",
                                    "2": {
                                      "16": {
                                        "1": 0,
                                        "2": 0,
                                        "3": 0,
                                        "4": 0,
                                        "5": "full"
                                      }
                                    }
                                  },
                                  {
                                    "1": "width",
                                    "2": {
                                      "1": {
                                        "1": "Infinity",
                                        "2": true
                                      }
                                    }
                                  }
                                ],
                                "3": [
                                  {
                                    "1": "container",
                                    "2": [
                                      {
                                        "1": "height",
                                        "2": {
                                          "1": {
                                            "1": 8,
                                            "2": false
                                          }
                                        }
                                      },
                                      {
                                        "1": "bg",
                                        "2": {
                                          "4": {
                                            "1": "primary"
                                          }
                                        }
                                      },
                                      {
                                        "1": "radius",
                                        "2": {
                                          "16": {
                                            "1": 0,
                                            "2": 0,
                                            "3": 0,
                                            "4": 0,
                                            "5": "full"
                                          }
                                        }
                                      }
                                    ],
                                    "5": "5c2d2e70-28cd-4b84-a1aa-dd99fb9111b9"
                                  }
                                ],
                                "5": "5697640b-b96e-4bba-99ae-e5e9dcda052b"
                              },
                              {
                                "1": "text",
                                "2": [
                                  {
                                    "1": "content",
                                    "2": {
                                      "7": {
                                        "1": "65% of your weekly goal"
                                      }
                                    }
                                  },
                                  {
                                    "1": "style",
                                    "2": {
                                      "13": {
                                        "1": "label_small"
                                      }
                                    }
                                  },
                                  {
                                    "1": "color",
                                    "2": {
                                      "4": {
                                        "1": "secondary_text"
                                      }
                                    }
                                  }
                                ],
                                "5": "e2e98a79-ccc0-44d0-a5a2-fc64361ca4e9"
                              }
                            ],
                            "5": "ae24c0a1-c08d-472a-a457-0b52b27d45a7"
                          }
                        ],
                        "5": "92d8c24c-b6d8-490d-86b0-20b8fddb9141"
                      }
                    ],
                    "5": "3e251b06-fc3f-40e4-9ae0-a289dcf1f944"
                  }
                ],
                "5": "482ca3fc-6baa-4ce7-b834-b0d5d5cee3e0"
              },
              {
                "1": "sizedbox",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "7": {
                        "1": "lg"
                      }
                    }
                  }
                ],
                "5": "7ab00b10-182a-4633-8971-21c5197eda02"
              }
            ],
            "5": "96162949-e078-437e-a2a9-6e22bc5707bd"
          }
        ],
        "5": "9761ad81-035d-4459-953e-7e6782928054"
      },
      {
        "1": "fab",
        "2": [
          {
            "1": "icon",
            "2": {
              "11": {
                "1": "edit_note_rounded"
              }
            }
          },
          {
            "1": "label",
            "2": {
              "7": {
                "1": "Journal"
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "primary"
              }
            }
          },
          {
            "1": "color",
            "2": {
              "4": {
                "1": "background"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          }
        ],
        "5": "18f527a7-feab-4790-8c7b-01947f75c5df"
      }
    ],
    "5": "33047b0f-dc5b-4dd8-a03d-59537fc420b5"
  },
  "2": [
    {
      "1": "meditation_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                },
                "3": {
                  "4": {
                    "1": "surface"
                  }
                }
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "full"
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "sm",
                "7": "lg",
                "8": "sm",
                "9": "lg"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "23": {
                "1": 1,
                "2": {
                  "1": "selected",
                  "2": {
                    "7": {
                      "1": "primary"
                    }
                  },
                  "3": {
                    "7": {
                      "1": "divider"
                    }
                  }
                }
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "7": "sm"
              }
            }
          }
        ],
        "3": [
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "label"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "18": {
                    "1": "selected",
                    "2": {
                      "4": {
                        "1": "background"
                      }
                    },
                    "3": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "label_large"
                  }
                }
              },
              {
                "1": "font_weight",
                "2": {
                  "10": {
                    "1": 500
                  }
                }
              }
            ],
            "5": "7f82d965-9fe5-4a2b-830f-4b4860491c48"
          }
        ],
        "5": "f2d5b398-78ad-4aaa-82de-a33033e96f6d"
      }
    },
    {
      "1": "meditation_card",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 24,
                "2": 24,
                "3": 24,
                "4": 24
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "md"
              }
            }
          },
          {
            "1": "margin",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "8": "md"
              }
            }
          },
          {
            "1": "shadow",
            "2": {
              "7": {
                "1": "sm"
              }
            }
          },
          {
            "1": "clip",
            "2": {
              "9": {
                "1": true
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 18,
                        "2": 18,
                        "3": 18,
                        "4": 18
                      }
                    }
                  },
                  {
                    "1": "clip",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "image",
                    "2": [
                      {
                        "1": "source_desc",
                        "2": {
                          "17": {
                            "1": "img_desc"
                          }
                        }
                      },
                      {
                        "1": "fit",
                        "2": {
                          "7": {
                            "1": "cover"
                          }
                        }
                      },
                      {
                        "1": "width",
                        "2": {
                          "1": {
                            "1": 80,
                            "2": false
                          }
                        }
                      },
                      {
                        "1": "height",
                        "2": {
                          "1": {
                            "1": 80,
                            "2": false
                          }
                        }
                      }
                    ],
                    "5": "82b4b6a1-456f-47b1-a5e5-67702a3331f7"
                  }
                ],
                "5": "05136c11-5156-4b23-a97d-d54703c1bde9"
              },
              {
                "1": "expanded",
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      },
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "title"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "title_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "font_weight",
                            "2": {
                              "10": {
                                "1": 600
                              }
                            }
                          },
                          {
                            "1": "max_lines",
                            "2": {
                              "10": {
                                "1": 1
                              }
                            }
                          },
                          {
                            "1": "overflow",
                            "2": {
                              "7": {
                                "1": "ellipsis"
                              }
                            }
                          }
                        ],
                        "5": "34913053-28b5-49e5-815e-5dc31bc97e59"
                      },
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "17": {
                                "1": "duration"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_small"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "secondary_text"
                              }
                            }
                          }
                        ],
                        "5": "692e9b0a-c71b-4c0d-9c9c-86fa037e1255"
                      },
                      {
                        "1": "row",
                        "2": [
                          {
                            "1": "spacing",
                            "2": {
                              "7": {
                                "1": "xs"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "icon",
                            "2": [
                              {
                                "1": "name",
                                "2": {
                                  "11": {
                                    "1": "self_improvement_rounded"
                                  }
                                }
                              },
                              {
                                "1": "size",
                                "2": {
                                  "10": {
                                    "1": 14
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "accent"
                                  }
                                }
                              }
                            ],
                            "5": "2d4c20ba-25f0-4de3-b7c0-946acc75cf6d"
                          },
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "17": {
                                    "1": "category"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "accent"
                                  }
                                }
                              },
                              {
                                "1": "font_weight",
                                "2": {
                                  "10": {
                                    "1": 500
                                  }
                                }
                              }
                            ],
                            "5": "b787b57f-e03f-414f-a47a-d2b01be04d49"
                          }
                        ],
                        "5": "7e45cf09-385d-41fd-bed5-3f52442241e6"
                      }
                    ],
                    "5": "eb24f928-bee5-4cce-ad62-1def3684f51e"
                  }
                ],
                "5": "16c6de1b-93d0-4496-8753-932a9959ffb6"
              },
              {
                "1": "iconbutton",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "11": {
                        "1": "play_circle_filled_rounded"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 32
                      }
                    }
                  }
                ],
                "5": "6fd08f2b-43d8-4815-84e4-72870a9aeef0"
              }
            ],
            "5": "1edd8b30-e247-4d6a-8b12-d4382260ede5"
          }
        ],
        "5": "b8f83ccf-163a-43b4-8c3f-9d4475ee69b3"
      }
    },
    {
      "1": "organic_blob",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "width",
            "2": {
              "17": {
                "1": "size"
              }
            }
          },
          {
            "1": "height",
            "2": {
              "17": {
                "1": "size"
              }
            }
          },
          {
            "1": "bg",
            "2": {
              "17": {
                "1": "color"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "11": "r1",
                "12": "r2",
                "13": "r3",
                "14": "r4"
              }
            }
          },
          {
            "1": "opacity",
            "2": {
              "10": {
                "1": 0.15
              }
            }
          }
        ],
        "5": "e49ca10b-ad35-441a-855a-9133cad96914"
      }
    }
  ]
}
```

### 10. New Screen 1

- Frame ID: `b3aa99ae-36fe-43a9-abaf-a537bc4fd957`
- Original page prompt: "create the login and signup page"
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "1": {
    "1": "scaffold",
    "2": [
      {
        "1": "bg",
        "2": {
          "4": {
            "1": "background"
          }
        }
      },
      {
        "1": "safe_area",
        "2": {
          "9": {
            "1": true
          }
        }
      }
    ],
    "3": [
      {
        "1": "column",
        "2": [
          {
            "1": "scroll",
            "2": {
              "9": {
                "1": true
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "lg"
              }
            }
          },
          {
            "1": "spacing",
            "2": {
              "7": {
                "1": "lg"
              }
            }
          },
          {
            "1": "cross_align",
            "2": {
              "6": {
                "1": "stretch"
              }
            }
          }
        ],
        "3": [
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              },
              {
                "1": "padding",
                "2": {
                  "5": {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "8": "lg"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "width",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "height",
                    "2": {
                      "1": {
                        "1": 80,
                        "2": false
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "lg"
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "accent"
                      }
                    }
                  },
                  {
                    "1": "align_child",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  },
                  {
                    "1": "shadow",
                    "2": {
                      "7": {
                        "1": "sm"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "icon",
                    "2": [
                      {
                        "1": "name",
                        "2": {
                          "11": {
                            "1": "spa_rounded"
                          }
                        }
                      },
                      {
                        "1": "size",
                        "2": {
                          "10": {
                            "1": 40
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "2a21f199-171a-4181-a051-6562ac714c18"
                  }
                ],
                "5": "6632f022-b0e3-4d89-ae14-6a980af3a698"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "xs"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Bloom Wellness"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "headline_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      },
                      {
                        "1": "text_align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "5": "fd1fd17e-143c-4dba-a37a-b5bd00390d8e"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Your companion through every stage of motherhood"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      },
                      {
                        "1": "text_align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "5": "b62a466f-980d-4535-86d4-169e987effd4"
                  }
                ],
                "5": "01c78f02-9ac9-4395-a494-a206b9a4c940"
              }
            ],
            "5": "e44e7e56-bba0-4419-b691-2ad4154cc499"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "container",
                "2": [
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "surface"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "full"
                      }
                    }
                  },
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "xs"
                      }
                    }
                  },
                  {
                    "1": "border",
                    "2": {
                      "22": {
                        "1": 1,
                        "2": "divider"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "3": [
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "expanded",
                            "2": {
                              "20": {
                                "1": true,
                                "2": 1
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "primary"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "full"
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "6": "sm",
                                "8": "sm"
                              }
                            }
                          },
                          {
                            "1": "align_child",
                            "2": {
                              "6": {
                                "1": "center"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Sign Up"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "on_primary"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_large"
                                  }
                                }
                              }
                            ],
                            "5": "2ae3d3c9-4a55-4b9a-9dc9-e1df13426b9d"
                          }
                        ],
                        "5": "453be8ce-69c4-488a-a669-dbf51021217a"
                      },
                      {
                        "1": "container",
                        "2": [
                          {
                            "1": "expanded",
                            "2": {
                              "20": {
                                "1": true,
                                "2": 1
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "transparent"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "full"
                              }
                            }
                          },
                          {
                            "1": "padding",
                            "2": {
                              "5": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "6": "sm",
                                "8": "sm"
                              }
                            }
                          },
                          {
                            "1": "align_child",
                            "2": {
                              "6": {
                                "1": "center"
                              }
                            }
                          }
                        ],
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Login"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "secondary_text"
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "label_large"
                                  }
                                }
                              }
                            ],
                            "5": "e97784c1-c91e-4601-af2e-1cceeb51fa2a"
                          }
                        ],
                        "5": "d22e674f-7168-4e94-8db3-4987e2b075e3"
                      }
                    ],
                    "5": "e93e9daf-cfa4-4203-8afe-1ba6f854bbcd"
                  }
                ],
                "5": "514256d7-6c50-4150-97fd-94ad37973b80"
              },
              {
                "1": "sizedbox",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "7": {
                        "1": "sm"
                      }
                    }
                  }
                ],
                "5": "c0940af4-4c37-4357-9f99-14eabb10266e"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      },
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Full Name"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "5ebf979b-bf7e-4ff0-a8d7-dd57b02d12de"
                      },
                      {
                        "1": "textfield",
                        "2": [
                          {
                            "1": "hint",
                            "2": {
                              "7": {
                                "1": "Enter your name"
                              }
                            }
                          },
                          {
                            "1": "prefix_icon",
                            "2": {
                              "7": {
                                "1": "person_outline_rounded"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "md"
                              }
                            }
                          },
                          {
                            "1": "filled",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "surface"
                              }
                            }
                          }
                        ],
                        "5": "b953206e-ab7c-4c26-9c35-1a33431161ee"
                      }
                    ],
                    "5": "35ea1097-e89a-4397-bc6b-378ed7f67dc2"
                  },
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      },
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Email Address"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "8278c5d8-6fba-4315-a8af-082a1b4d930c"
                      },
                      {
                        "1": "textfield",
                        "2": [
                          {
                            "1": "hint",
                            "2": {
                              "7": {
                                "1": "hello@example.com"
                              }
                            }
                          },
                          {
                            "1": "prefix_icon",
                            "2": {
                              "7": {
                                "1": "mail_outline_rounded"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "md"
                              }
                            }
                          },
                          {
                            "1": "filled",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "surface"
                              }
                            }
                          },
                          {
                            "1": "keyboard",
                            "2": {
                              "7": {
                                "1": "email"
                              }
                            }
                          }
                        ],
                        "5": "47ea4b1c-e568-483e-a1e8-9af17436fc55"
                      }
                    ],
                    "5": "d13bd514-46b3-49bc-8e99-7fec3e7603b4"
                  },
                  {
                    "1": "column",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "xs"
                          }
                        }
                      },
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "start"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "text",
                        "2": [
                          {
                            "1": "content",
                            "2": {
                              "7": {
                                "1": "Password"
                              }
                            }
                          },
                          {
                            "1": "style",
                            "2": {
                              "13": {
                                "1": "label_medium"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          }
                        ],
                        "5": "0bf11e7e-d819-4501-a633-967453d86010"
                      },
                      {
                        "1": "textfield",
                        "2": [
                          {
                            "1": "hint",
                            "2": {
                              "7": {
                                "1": "Create a password"
                              }
                            }
                          },
                          {
                            "1": "prefix_icon",
                            "2": {
                              "7": {
                                "1": "lock_open_rounded"
                              }
                            }
                          },
                          {
                            "1": "suffix_icon",
                            "2": {
                              "7": {
                                "1": "visibility_off_rounded"
                              }
                            }
                          },
                          {
                            "1": "radius",
                            "2": {
                              "16": {
                                "1": 0,
                                "2": 0,
                                "3": 0,
                                "4": 0,
                                "5": "md"
                              }
                            }
                          },
                          {
                            "1": "filled",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          },
                          {
                            "1": "bg",
                            "2": {
                              "4": {
                                "1": "surface"
                              }
                            }
                          },
                          {
                            "1": "obscure",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          }
                        ],
                        "5": "161ace50-2eef-4122-9ea3-f773e37507f1"
                      }
                    ],
                    "5": "7c4ba688-9f25-4a18-956a-5c41fa07d0b0"
                  }
                ],
                "5": "7d44c2e8-b68a-4b1c-84d4-afb082072994"
              },
              {
                "1": "column",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "sm"
                      }
                    }
                  },
                  {
                    "1": "cross_align",
                    "2": {
                      "6": {
                        "1": "start"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Current Journey"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary_text"
                          }
                        }
                      }
                    ],
                    "5": "47546324-c965-4d9f-8f9c-757ee1bb3d86"
                  },
                  {
                    "1": "wrap",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "sm"
                          }
                        }
                      },
                      {
                        "1": "run_spacing",
                        "2": {
                          "7": {
                            "1": "sm"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "@phase_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Fertility"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "893fcd73-9e66-4c57-9d80-764c9ffea761"
                      },
                      {
                        "1": "@phase_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Pregnancy"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": true
                              }
                            }
                          }
                        ],
                        "5": "66d1c4a6-93b8-4283-a702-056eef81ca57"
                      },
                      {
                        "1": "@phase_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Postnatal"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "e3c482cb-e961-4259-9194-5015f95cedd7"
                      },
                      {
                        "1": "@phase_chip",
                        "2": [
                          {
                            "1": "label",
                            "2": {
                              "7": {
                                "1": "Wellness"
                              }
                            }
                          },
                          {
                            "1": "selected",
                            "2": {
                              "9": {
                                "1": false
                              }
                            }
                          }
                        ],
                        "5": "5742eada-af6d-4666-8aeb-d17328caf327"
                      }
                    ],
                    "5": "ab38c22b-c740-4b14-889d-10b56e644093"
                  }
                ],
                "5": "94c3ad30-d317-4200-9e8e-7efcc5d9771d"
              }
            ],
            "5": "53bd85e8-1065-4bcd-bd41-0ae87634df5f"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "md"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "button",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "7": {
                        "1": "Create Account"
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "primary"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "on_primary"
                      }
                    }
                  },
                  {
                    "1": "full_width",
                    "2": {
                      "9": {
                        "1": true
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "7": {
                        "1": "large"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "md"
                      }
                    }
                  },
                  {
                    "1": "font_size",
                    "2": {
                      "10": {
                        "1": 16
                      }
                    }
                  }
                ],
                "5": "c38595f3-d722-4342-aa85-37e91a977153"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  },
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "expanded",
                    "3": [
                      {
                        "1": "divider",
                        "2": [
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "divider"
                              }
                            }
                          }
                        ],
                        "5": "9ba86c01-a160-4fff-9823-9abf840fba3d"
                      }
                    ],
                    "5": "ee507526-60d4-425f-9953-bdf27fcbf221"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "or join with"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_small"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "hint"
                          }
                        }
                      }
                    ],
                    "5": "1982eda2-6d61-4f14-b4a9-8281feae7820"
                  },
                  {
                    "1": "expanded",
                    "3": [
                      {
                        "1": "divider",
                        "2": [
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "divider"
                              }
                            }
                          }
                        ],
                        "5": "558102f4-2419-4595-85ff-8de415dac414"
                      }
                    ],
                    "5": "19ef4250-0316-4c04-88d6-6fe77a7a0da0"
                  }
                ],
                "5": "98e05ead-b94c-4a4f-89de-0b23bd1b3aa4"
              },
              {
                "1": "row",
                "2": [
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "md"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "@social_auth_button",
                    "2": [
                      {
                        "1": "provider",
                        "2": {
                          "7": {
                            "1": "google"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Google"
                          }
                        }
                      }
                    ],
                    "5": "24edec3b-2086-437f-bda1-406b355962be"
                  },
                  {
                    "1": "@social_auth_button",
                    "2": [
                      {
                        "1": "provider",
                        "2": {
                          "7": {
                            "1": "apple"
                          }
                        }
                      },
                      {
                        "1": "label",
                        "2": {
                          "7": {
                            "1": "Apple"
                          }
                        }
                      }
                    ],
                    "5": "c0734a64-b415-42b8-a573-7493e2ddd899"
                  }
                ],
                "5": "7831c0df-9fee-4b32-9af9-9a40ad29d2e3"
              }
            ],
            "5": "ec2e18af-5ac9-4520-9eac-03d95bd42f07"
          },
          {
            "1": "column",
            "2": [
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                }
              },
              {
                "1": "cross_align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "row",
                "2": [
                  {
                    "1": "align",
                    "2": {
                      "6": {
                        "1": "center"
                      }
                    }
                  },
                  {
                    "1": "spacing",
                    "2": {
                      "7": {
                        "1": "xs"
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Already have an account?"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "body_medium"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "secondary_text"
                          }
                        }
                      }
                    ],
                    "5": "e72e6bb5-94dd-46c7-b149-f51fc96c2d7e"
                  },
                  {
                    "1": "text",
                    "2": [
                      {
                        "1": "content",
                        "2": {
                          "7": {
                            "1": "Sign In"
                          }
                        }
                      },
                      {
                        "1": "style",
                        "2": {
                          "13": {
                            "1": "label_large"
                          }
                        }
                      },
                      {
                        "1": "color",
                        "2": {
                          "4": {
                            "1": "primary"
                          }
                        }
                      },
                      {
                        "1": "decoration",
                        "2": {
                          "7": {
                            "1": "underline"
                          }
                        }
                      }
                    ],
                    "5": "002499e5-7793-407b-b3b4-a64ef9008cef"
                  }
                ],
                "5": "f009d42f-31c8-4261-a666-84f381ddc181"
              },
              {
                "1": "sizedbox",
                "2": [
                  {
                    "1": "height",
                    "2": {
                      "7": {
                        "1": "lg"
                      }
                    }
                  }
                ],
                "5": "76e27b25-5193-4d20-abb2-6555c35d002f"
              },
              {
                "1": "container",
                "2": [
                  {
                    "1": "padding",
                    "2": {
                      "5": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "md"
                      }
                    }
                  },
                  {
                    "1": "radius",
                    "2": {
                      "16": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": "md"
                      }
                    }
                  },
                  {
                    "1": "bg",
                    "2": {
                      "4": {
                        "1": "accent"
                      }
                    }
                  },
                  {
                    "1": "opacity",
                    "2": {
                      "10": {
                        "1": 0.6
                      }
                    }
                  }
                ],
                "3": [
                  {
                    "1": "row",
                    "2": [
                      {
                        "1": "spacing",
                        "2": {
                          "7": {
                            "1": "md"
                          }
                        }
                      },
                      {
                        "1": "cross_align",
                        "2": {
                          "6": {
                            "1": "center"
                          }
                        }
                      }
                    ],
                    "3": [
                      {
                        "1": "icon",
                        "2": [
                          {
                            "1": "name",
                            "2": {
                              "11": {
                                "1": "security_rounded"
                              }
                            }
                          },
                          {
                            "1": "color",
                            "2": {
                              "4": {
                                "1": "primary_text"
                              }
                            }
                          },
                          {
                            "1": "size",
                            "2": {
                              "10": {
                                "1": 18
                              }
                            }
                          }
                        ],
                        "5": "f213a929-2fbb-4cc0-98c1-65bbd81cf673"
                      },
                      {
                        "1": "expanded",
                        "3": [
                          {
                            "1": "text",
                            "2": [
                              {
                                "1": "content",
                                "2": {
                                  "7": {
                                    "1": "Your data is encrypted and private. We never share your health journey with third parties."
                                  }
                                }
                              },
                              {
                                "1": "style",
                                "2": {
                                  "13": {
                                    "1": "body_small"
                                  }
                                }
                              },
                              {
                                "1": "color",
                                "2": {
                                  "4": {
                                    "1": "primary_text"
                                  }
                                }
                              },
                              {
                                "1": "max_lines",
                                "2": {
                                  "10": {
                                    "1": 2
                                  }
                                }
                              }
                            ],
                            "5": "40e01a3c-f49e-4e07-9d5e-a01648e1bfe8"
                          }
                        ],
                        "5": "76bd871e-e535-4844-b0a0-d93914a2fab9"
                      }
                    ],
                    "5": "6dd6cdff-68a5-4a0e-981e-440199fc46e3"
                  }
                ],
                "5": "80468c3e-dc4c-4246-8133-8beaf3ea392f"
              }
            ],
            "5": "1a44fcbe-34b4-407b-a4e0-d4e1dd5ffaea"
          }
        ],
        "5": "4076c8fa-7683-454a-b748-178c0f88d7ab"
      }
    ],
    "5": "584f4a61-8220-43b2-a3fe-a1c6955b9382"
  },
  "2": [
    {
      "1": "social_auth_button",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "4": {
                "1": "surface"
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "md"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "22": {
                "1": 1,
                "2": "divider"
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "md",
                "8": "md"
              }
            }
          },
          {
            "1": "align_child",
            "2": {
              "6": {
                "1": "center"
              }
            }
          },
          {
            "1": "expanded",
            "2": {
              "20": {
                "1": true,
                "2": 1
              }
            }
          }
        ],
        "3": [
          {
            "1": "row",
            "2": [
              {
                "1": "align",
                "2": {
                  "6": {
                    "1": "center"
                  }
                }
              },
              {
                "1": "spacing",
                "2": {
                  "7": {
                    "1": "sm"
                  }
                }
              }
            ],
            "3": [
              {
                "1": "logo_icon",
                "2": [
                  {
                    "1": "name",
                    "2": {
                      "17": {
                        "1": "provider"
                      }
                    }
                  },
                  {
                    "1": "size",
                    "2": {
                      "10": {
                        "1": 20
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  }
                ],
                "5": "34b8eb3a-66cd-4032-b35f-e73cc65e0b13"
              },
              {
                "1": "text",
                "2": [
                  {
                    "1": "content",
                    "2": {
                      "17": {
                        "1": "label"
                      }
                    }
                  },
                  {
                    "1": "style",
                    "2": {
                      "13": {
                        "1": "label_large"
                      }
                    }
                  },
                  {
                    "1": "color",
                    "2": {
                      "4": {
                        "1": "primary_text"
                      }
                    }
                  }
                ],
                "5": "361708ac-d281-46b9-aaf2-c364f4f2b446"
              }
            ],
            "5": "049a6d8e-15f7-432a-8804-55499aa45bd7"
          }
        ],
        "5": "5d39d857-79b8-4443-b29c-ed0f3b93f606"
      }
    },
    {
      "1": "phase_chip",
      "2": {
        "1": "container",
        "2": [
          {
            "1": "bg",
            "2": {
              "18": {
                "1": "selected",
                "2": {
                  "4": {
                    "1": "primary"
                  }
                },
                "3": {
                  "4": {
                    "1": "surface"
                  }
                }
              }
            }
          },
          {
            "1": "radius",
            "2": {
              "16": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": "full"
              }
            }
          },
          {
            "1": "padding",
            "2": {
              "5": {
                "1": 0,
                "2": 0,
                "3": 0,
                "4": 0,
                "6": "sm",
                "7": "lg",
                "8": "sm",
                "9": "lg"
              }
            }
          },
          {
            "1": "border",
            "2": {
              "23": {
                "1": 1,
                "2": {
                  "1": "selected",
                  "2": {
                    "7": {
                      "1": "primary"
                    }
                  },
                  "3": {
                    "7": {
                      "1": "divider"
                    }
                  }
                }
              }
            }
          }
        ],
        "3": [
          {
            "1": "text",
            "2": [
              {
                "1": "content",
                "2": {
                  "17": {
                    "1": "label"
                  }
                }
              },
              {
                "1": "color",
                "2": {
                  "18": {
                    "1": "selected",
                    "2": {
                      "4": {
                        "1": "on_primary"
                      }
                    },
                    "3": {
                      "4": {
                        "1": "secondary_text"
                      }
                    }
                  }
                }
              },
              {
                "1": "style",
                "2": {
                  "13": {
                    "1": "label_medium"
                  }
                }
              }
            ],
            "5": "da5ce2f2-3d56-42b9-8eab-e16548763fbc"
          }
        ],
        "5": "2795911c-151e-4dd8-8682-24e2ea5f5c48"
      }
    }
  ]
}
```