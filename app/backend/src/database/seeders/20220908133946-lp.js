module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'lps',
      [
        {
          title: 'Lóki?',
          artist: 'Arnaldo Baptista',
          genre: 'Rock',
          image: 'https://1.bp.blogspot.com/-6BDrtiMcVww/XamdFTxHlDI/AAAAAAABSYg/9F9BL4W7rtUw2jG69a6AoQm54HxRySBsQCLcBGAsYHQ/s1600/7180006.jpg',
          price: 120,
          description: 'Lóki? é o primeiro álbum solo de Arnaldo Baptista, depois do término da banda Os Mutantes. É considerado um dos discos mais importantes do rock brasileiro e da MPB por alguns críticos.'
        },
        {
          title: 'Vespertine',
          artist: 'Björk',
          genre: 'Pop',
          image: 'https://cf.shopee.com.br/file/621ebc9f7606f174c6be08360c772c5c',
          price: 150,
          description: 'Vespertine é o sexto álbum de estúdio da cantora islandesa Björk, lançado em 2001. O álbum foi produzido por Björk e Mark Bell, e foi gravado no estúdio de Mark Bell, The Church, em Londres, Inglaterra.'
        },
        {
          title: 'Blonde',
          artist: 'Frank Ocean',
          genre: 'R&B',
          image: 'https://upload.wikimedia.org/wikipedia/pt/b/ba/313x0w.jpg',
          price: 120,
          description: 'Blonde é o terceiro álbum de estúdio do cantor e compositor norte-americano Frank Ocean, lançado em 20 de agosto de 2016, pela Def Jam Recordings',
        },
        {
          title: 'Twin Fantasy',
          artist: 'Car Seat Headrest',
          genre: 'Rock',
          image: 'https://monkeybuzz.com.br/wp-content/uploads/2018/02/a0202599159_10-5a8c377aa1a7a.jpg',
          price: 120,
          description: 'Twin Fantasy é o quarto álbum de estúdio do músico estadunidense Will Toledo, lançado em 2011 pela Matador Records. O álbum foi gravado em 2010, em sua casa em Seattle, Washington, e foi produzido por Toledo.',
        },
        {
          title: 'Melodrama',
          artist: 'Lorde',
          genre: 'Pop',
          image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/06/lorde-melodrama-capa.jpg',
          price: 120,
          description: 'Melodrama é o segundo álbum de estúdio da cantora neozelandesa Lorde, lançado em 16 de junho de 2017, pela Universal Music Group e Lava Records.',
        },
        {
          title: 'Quarup',
          artist: 'Lupe de Lupe',
          genre: 'Rock',
          image: 'https://i.scdn.co/image/ab67616d0000b27396a99b6f56834736f80619be',
          price: 120,
          description: 'Quarup é o segundo álbum de estúdio da banda brasileira Lupe de Lupe, lançado em 2019 pela Deckdisc. O álbum foi produzido por Lupe de Lupe e gravado no estúdio de Lupe de Lupe, em São Paulo, Brasil.',
        },
        {
          title: 'Capacity',
          artist: 'Big Thief',
          genre: 'Rock',
          image: 'https://i.scdn.co/image/ab67616d00001e020d86ec6aa49e27bcc92b87f1',
          price: 120,
          description: 'Capacity é o terceiro álbum de estúdio da banda americana Big Thief, lançado em 2019 pela 4AD. O álbum foi produzido por Big Thief e gravado no estúdio de Big Thief, em Brooklyn, Nova Iorque, Estados Unidos.',
        },
        {
          title: 'Lonerism',
          artist: 'Tame Impala',
          genre: 'Rock',
          image: 'https://m.media-amazon.com/images/I/A1gRVIbpyHL._AC_SX466_.jpg',
          price: 120,
          description: 'Lonerism é o segundo álbum de estúdio da banda australiana Tame Impala, lançado em 13 de outubro de 2012, pela Modular Recordings. O álbum foi produzido por Kevin Parker e gravado no estúdio de Kevin Parker, em Fremantle, Austrália Ocidental.',
        },
        {
          title: 'Jardim Elétrico',
          artist: 'Os Mutantes',
          genre: 'Rock',
          image: 'https://upload.wikimedia.org/wikipedia/pt/1/18/Jardim_Eletrico.jpg',
          price: 120,
          description: 'Jardim Elétrico é o quarto álbum de estúdio da banda brasileira Os Mutantes, lançado em 1969 pela Philips Records. O álbum foi produzido por Sérgio Dias e gravado no estúdio de Sérgio Dias, em São Paulo, Brasil.',
        },
        {
          title: 'In Rainbows',
          artist: 'Radiohead',
          genre: 'Rock',
          image: 'https://upload.wikimedia.org/wikipedia/pt/9/96/Radiohead_-_In_Rainbows.jpg',
          price: 120,
          description: 'In Rainbows é o sétimo álbum de estúdio da banda britânica de rock alternativo Radiohead, lançado em 10 de outubro de 2007, pela XL Recordings. O álbum foi produzido por Nigel Godrich e gravado no estúdio de Nigel Godrich, em Oxfordshire, Inglaterra.',
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('lps', null, {});
  },
};
