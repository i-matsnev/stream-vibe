import categoryItems from "@/sections/Categories/categoryItems"

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 20min',
            views: '3K',
          },
          {
            title: 'Ant-man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '5K',
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'The Foreigner',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'The Foreigner',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'The Foreigner',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },

          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            },
          },
          {
            title: 'The Foreigner',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            },
          },
          {
            title: 'Sin city',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            },
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            },
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            },
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },
          {
            title: 'Blade runner 2049',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/14.jpg',
            duration: '2h 10min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },
          {
            title: 'Blade runner 2049',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/14.jpg',
            duration: '2h 10min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },
          {
            title: 'Blade runner 2049',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/14.jpg',
            duration: '2h 10min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },

          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },
          {
            title: 'Blade runner 2049',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/14.jpg',
            duration: '2h 10min',
            rating: {
              value: 4.0,
              label: '20K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ]
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres 2',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'Stranger things 7',
            imgSrc: '/src/assets/images/movies/15.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/16.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/movies/17.jpg',
            duration: '14h 30min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The gray man',
            imgSrc: '/src/assets/images/movies/18.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Stranger things 7',
            imgSrc: '/src/assets/images/movies/15.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/16.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/movies/17.jpg',
            duration: '14h 30min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The gray man',
            imgSrc: '/src/assets/images/movies/18.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Stranger things 7',
            imgSrc: '/src/assets/images/movies/15.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/16.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/movies/17.jpg',
            duration: '14h 30min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The gray man',
            imgSrc: '/src/assets/images/movies/18.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Stranger things 7',
            imgSrc: '/src/assets/images/movies/15.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/16.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/movies/17.jpg',
            duration: '14h 30min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The gray man',
            imgSrc: '/src/assets/images/movies/18.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'High town',
            imgSrc: '/src/assets/images/movies/19.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/movies/20.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe into the shadows',
            imgSrc: '/src/assets/images/movies/21.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders',
            imgSrc: '/src/assets/images/movies/22.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'High town',
            imgSrc: '/src/assets/images/movies/19.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/movies/20.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe into the shadows',
            imgSrc: '/src/assets/images/movies/21.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders',
            imgSrc: '/src/assets/images/movies/22.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'High town',
            imgSrc: '/src/assets/images/movies/19.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/movies/20.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe into the shadows',
            imgSrc: '/src/assets/images/movies/21.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders',
            imgSrc: '/src/assets/images/movies/22.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'High town',
            imgSrc: '/src/assets/images/movies/19.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/movies/20.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe into the shadows',
            imgSrc: '/src/assets/images/movies/21.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders',
            imgSrc: '/src/assets/images/movies/22.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/movies/23.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            }
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/24.jpg',
            duration: '12h 23min',
            rating: {
              value: 5.0,
              label: '28K',
            }
          },
          {
            title: 'May',
            imgSrc: '/src/assets/images/movies/25.jpg',
            duration: '10h 30min',
            rating: {
              value: 4.0,
              label: '2K',
            }
          },
          {
            title: 'Stranger things 3',
            imgSrc: '/src/assets/images/movies/26.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },

          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/movies/23.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            }
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/24.jpg',
            duration: '12h 23min',
            rating: {
              value: 5.0,
              label: '28K',
            }
          },
          {
            title: 'May',
            imgSrc: '/src/assets/images/movies/25.jpg',
            duration: '10h 30min',
            rating: {
              value: 4.0,
              label: '2K',
            }
          },
          {
            title: 'Stranger things 3',
            imgSrc: '/src/assets/images/movies/26.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },

          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/movies/23.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            }
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/24.jpg',
            duration: '12h 23min',
            rating: {
              value: 5.0,
              label: '28K',
            }
          },
          {
            title: 'May',
            imgSrc: '/src/assets/images/movies/25.jpg',
            duration: '10h 30min',
            rating: {
              value: 4.0,
              label: '2K',
            }
          },
          {
            title: 'Stranger things 3',
            imgSrc: '/src/assets/images/movies/26.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },

          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/movies/23.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            }
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/movies/24.jpg',
            duration: '12h 23min',
            rating: {
              value: 5.0,
              label: '28K',
            }
          },
          {
            title: 'May',
            imgSrc: '/src/assets/images/movies/25.jpg',
            duration: '10h 30min',
            rating: {
              value: 4.0,
              label: '2K',
            }
          },
          {
            title: 'Stranger things 3',
            imgSrc: '/src/assets/images/movies/26.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.5,
              label: '32K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ]
  },
]

export default collectionGroups