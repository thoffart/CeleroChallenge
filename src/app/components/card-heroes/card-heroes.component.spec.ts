import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeroesComponent } from './card-heroes.component';

describe('CardHeroesComponent', () => {
  let component: CardHeroesComponent;
  let fixture: ComponentFixture<CardHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardHeroesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeroesComponent);
    component = fixture.componentInstance;
    component.hero = {
      id: 1009368,
      name: 'Iron Man',
      description:
        // tslint:disable-next-line:max-line-length
        'Wounded, captured and forced to build a weapon by his enemies,billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
      modified: '2016-09-28T12:08:19-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
      comics: {
        available: 2538,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43495',
            name: 'A+X (2012) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43506',
            name: 'A+X (2012) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24348',
            name: 'Adam: Legend of the Blue Marvel (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22461',
            name: 'Adam: Legend of the Blue Marvel (2008) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22856',
            name: 'Adam: Legend of the Blue Marvel (2008) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23733',
            name: 'Adam: Legend of the Blue Marvel (2008) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
            name: 'Age of Heroes (2010) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67603',
            name: 'Age of Innocence: The Rebirth of Iron Man (1996) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
            name: 'Age of X: Universe (2011) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
            name: 'Age of X: Universe (2011) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21280',
            name: 'All-New Iron Manual (2008) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55363',
            name: 'All-New, All-Different Avengers (2015) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55364',
            name: 'All-New, All-Different Avengers (2015) #11'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12653',
            name: 'Alpha Flight (1983) #113'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
            name: 'Alpha Flight (1983) #127'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55311',
            name: 'The Amazing Spider-Man (2015) #13'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55312',
            name: 'The Amazing Spider-Man (2015) #14'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55313',
            name: 'The Amazing Spider-Man (2015) #15'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43170',
            name: 'Amazing Spider-Man (1999) #57'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43171',
            name: 'Amazing Spider-Man (1999) #58'
          }
        ],
        returned: 20
      },
      series: {
        available: 617,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
            name: 'A+X (2012 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
            name: 'Adam: Legend of the Blue Marvel (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7524',
            name: 'Adam: Legend of the Blue Marvel (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
            name: 'Age of Heroes (2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24380',
            name: 'Age of Innocence: The Rebirth of Iron Man (1996)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
            name: 'Age of X: Universe (2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4897',
            name: 'All-New Iron Manual (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20443',
            name: 'All-New, All-Different Avengers (2015 - 2016)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15540',
            name: 'Amazing Spider-Man Annual (2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1489',
            name: 'AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/318',
            name: 'Amazing Spider-Man Vol. 6 (2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23446',
            name: 'Amazing Spider-Man: Worldwide Vol. 2 (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6056',
            name: 'ANNIHILATION CLASSIC HC (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
            name: 'Annihilators: Earthfall (2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14779',
            name: 'Art of Marvel Studios TPB Slipcase (2011 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9792',
            name: 'Astonishing Spider-Man/Wolverine (2010 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/6792',
            name: 'Astonishing Tales (2009)'
          }
        ],
        returned: 20
      },
      stories: {
        available: 3823,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
            name: 'X-MEN (2004) #186',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
            name: 'THOR (1998) #81',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/960',
            name: '3 of ?',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/982',
            name: 'Interior #982',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/984',
            name: 'Interior #984',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/986',
            name: 'Interior #986',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/988',
            name: 'Interior #988',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/990',
            name: 'Interior #990',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/992',
            name: 'Interior #992',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/994',
            name: 'Interior #994',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/996',
            name: 'Interior #996',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/998',
            name: 'Interior #998',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1000',
            name: 'Interior #1000',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1002',
            name:
              // tslint:disable-next-line:max-line-length
              'AVENGERS DISASSEMBLED TIE-IN! Still reeling from recent traumas, Iron Man must face off against his evil doppelganger. Meanwhile',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1004',
            name:
              // tslint:disable-next-line:max-line-length
              'THE SINGULARITY CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1018',
            name: 'Amazing Spider-Man (1999) #500',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
            name: 'Avengers (1998) #80',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
            name: 'Avengers (1998) #81',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
            name: 'Avengers (1998) #502',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1051',
            name: 'Interior #1051',
            type: 'interiorStory'
          }
        ],
        returned: 20
      },
      events: {
        available: 30,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009368/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/231',
            name: 'Armor Wars'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
            name: 'Atlantis Attacks'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
            name: 'Avengers Disassembled'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
            name: 'Avengers VS X-Men'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
            name: 'Chaos War'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
            name: 'Civil War'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/239',
            name: 'Crossing'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
            name: 'Enemy of the State'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
            name: 'Fatal Attractions'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
            name: 'House of M'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
            name: 'Inhumanity'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
            name: 'Maximum Security'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught'
          }
        ],
        returned: 20
      },
      urls: [
        {
          type: 'detail',
          url:
            'http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=f4cc0c879a461c1af5cc1758a111d127'
        },
        {
          type: 'wiki',
          url:
            'http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=f4cc0c879a461c1af5cc1758a111d127'
        },
        {
          type: 'comiclink',
          url:
            'http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=f4cc0c879a461c1af5cc1758a111d127'
        }
      ]
    },
      fixture.detectChanges();
  });

  it('should create the card heroes component', () => {
    expect(component).toBeTruthy();
  });
});
