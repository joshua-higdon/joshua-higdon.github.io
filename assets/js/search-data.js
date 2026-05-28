// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/HigdonCV.pdf";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This page is a work in progress. More exciting projects to come!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at the University of Florida organized by course level.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-second-co-authored-paper-with-dr-david-giancaspro-has-just-been-published-in-studies-in-hispanic-and-lusophone-linguistics-we-analyzed-heritage-speakers-producition-and-comprhension-of-person-morphology-across-the-present-perfect-and-preterite-tenses-finding-that-the-frequency-of-a-given-tense-modulates-participants-person-morphology-comprehension-and-production-check-out-the-paper-here",
          title: 'My second co-authored paper with Dr. David Giancaspro has just been published in...',
          description: "",
          section: "News",},{id: "news-i-just-attended-the-college-of-liberal-arts-and-sciences-clas-graduate-ta-awards-ceremony-where-i-was-honored-as-a-graduate-ta-of-the-year-each-year-clas-selects-only-20-of-the-best-tas-across-all-of-the-college-of-liberal-arts-and-sciences-and-i-am-very-appreciative-that-my-dedication-to-teaching-excellence-has-been-recognized-special-thanks-to-dr-jennifer-wooten-for-the-excellent-teaching-training-and-guidance-that-she-has-provided-me-over-the-years",
          title: 'I just attended the College of Liberal Arts and Sciences (CLAS) Graduate TA...',
          description: "",
          section: "News",},{id: "news-i-just-presented-my-poster-at-quasy-at-syntaxfest-my-research-conducted-with-dr-zoey-liu-and-ma-valeria-pagliai-used-computational-methods-to-analyze-spanish-english-code-switching-in-three-bilingual-corpora-feel-free-to-check-out-our-proceedings-paper-to-learn-more",
          title: 'I just presented my poster at QUASY at SyntaxFest! My research, conducted with...',
          description: "",
          section: "News",},{id: "news-new-publication-the-paper-that-i-have-co-written-with-ma-hannah-treadway-and-dr-jorge-valdés-kroff-is-officially-published-we-examined-how-l2-spanish-learners-process-light-verb-code-switches-such-as-hice-drink-the-coffee-that-are-uncommon-in-florida-to-investigate-how-passive-exposure-to-spanish-english-code-switching-may-affect-their-processing-of-light-verb-code-switches-special-thanks-to-hannah-for-welcoming-me-onto-this-project",
          title: 'New publication! The paper that I have co-written with MA Hannah Treadway and...',
          description: "",
          section: "News",},{id: "news-i-am-honored-to-have-received-the-whitney-koonce-memorial-award-a-memorial-award-awarded-to-a-graduate-student-that-has-demonstrated-tenacity-and-kindness-during-their-time-at-the-university-of-florida-at-the-spanish-and-portuguese-studies-awards-ceremony-i-am-incredibly-appreciative-of-the-koonce-family-s-generosity-and-my-department-for-awarding-me-such-a-prestigious-award",
          title: 'I am honored to have received the Whitney Koonce Memorial Award, a memorial...',
          description: "",
          section: "News",},{id: "projects-regularity-effects-on-spanish-heritage-speakers-39-subjunctive-production-and-comprehension",
          title: 'Regularity effects on Spanish heritage speakers&amp;#39; subjunctive production and comprehension',
          description: "Image credit-Spanish Grammar in Context",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-person-agreement-across-the-preterite-and-present-perfect-tenses-in-spanish-heritage-speakers",
          title: 'Person agreement across the preterite and present perfect tenses in Spanish heritage speakers...',
          description: "Image credit-Baselang",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-a-corpora-based-analysis-of-directionality-and-part-of-speech-effects-on-spanish-english-code-switching-in-florida-and-texas",
          title: 'A corpora-based analysis of directionality and part of speech effects on Spanish-English code-switching...',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CS_project/";
            },},{id: "projects-the-role-of-exposure-to-spanish-english-code-switching",
          title: 'The role of exposure to Spanish-English code-switching',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Hannah_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A.%68%69%67%64%6F%6E@%75%66%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3196-6441", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/z4syn/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/josh-higdon-61897419b", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
