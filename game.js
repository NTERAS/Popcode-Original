let buttons = document.querySelectorAll("btn-style-off");
let win = false;
let tutorial = true;
let upto = 1;
let counterPhase = 1;
let totalStrikes = 0;
hideShit("yes");
disableKeyboard();

const langObj =
  '{"langArray":[' +
  '{"language":"javascript","img":"images/langs-code/js-434x434.png","text":"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web. Une grande majorité des sites web l’utilises, et la majorité des navigateurs web disposent d’un moteur JavaScript pour l’interpréter." },' +
  '{"language":"html","img":"images/langs-code/HTML 434x434.png","text":"Le HyperText Markup Language, généralement abrégé HTML ou, dans sa dernière version, HTML5, est le langage de balisage conçu pour représenter les pages web.Ce langage permet : d’écrire de l’hypertexte, d’où son nom, de structurer sémantiquement la page, de mettre en forme le contenu, de créer des formulaires de saisie, d’inclure des ressources multimédias dont des images, des vidéos, et des programmes informatiques, de créer des documents interopérables avec des équipements très variés de manière conforme aux exigences de l’accessibilité du web." },' +
  '{"language":"css","img":"images/langs-code/CSS 307x434.png","text":"Les feuilles de style en cascade1, généralement appelées CSS de l’anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000. " },' +
  '{"language":"sql","img":"images/langs-code/sql 434.png","text":"SQL (sigle de Structured Query Language, en français langage de requête structurée) est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d’ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles. " },' +
  '{"language":"python","img":"images/langs-code/pi 434.png","text":"Python (prononcé /pi.tɔ̃/) est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet. Il est doté d’un typage dynamique fort, d’une gestion automatique de la mémoire par ramasse-miettes et d’un système de gestion d’exceptions ; il est ainsi similaire à Perl, Ruby, Scheme, Smalltalk et Tcl.Le langage Python est placé sous une licence libre proche de la licence BSD et fonctionne sur la plupart des plates-formes informatiques, des smartphones aux ordinateurs centraux, de Windows à Unix avec notamment GNU/Linux en passant par macOS, ou encore Android, iOS, et peut aussi être traduit en Java ou .NET. Il est conçu pour optimiser la productivité des programmeurs en offrant des outils de haut niveau et une syntaxe simple à utiliser.Il est également apprécié par certains pédagogues qui y trouvent un langage où la syntaxe, clairement séparée des mécanismes de bas niveau, permet une initiation aisée aux concepts de base de la programmation." },' +
  '{"language":"java","img":"images/langs-code/java 434.png","text":"Java est une technique informatique développée initialement par Sun Microsystems puis acquise par Oracle à la suite du rachat de l’entreprise. Défini à l’origine comme un langage de programmation, Java a évolué pour devenir un ensemble cohérent d’éléments techniques et non techniques. Ainsi, la technologie Java regroupe :Des standards (la plate-forme Java) définis sous forme de spécification par le Java Community Process (JCP), en trois éditions :Java SE (standard edition),Java EE (enterprise edition), s’appuyant sur Java SE,Java ME (micro edition), indépendante des deux précédentes ;Des logiciels (langages informatiques, bibliothèques, frameworks, serveurs d’application, outils d’aide au développement), dont :Des implémentations (concurrentes) de ces spécifications,Un écosystème d’autres logiciels s’appuyant sur tout ou partie de ces standards, voire leur faisant concurrence ;Des communautés d’entreprises, organisations à but non lucratif (fondations, Java User Groups, universités) et indépendants, membres ou non du JCP, possédant tout ou partie des marques, brevets, parts de marché liés à la technologie Java.Java est un des termes les plus connus du monde de l’informatique et de l’Internet. Sa notoriété est telle que Sun, avant d’être acheté par Oracle Corporation, a décidé de l’utiliser pour son symbole boursier au Nasdaq, symbole qui était SUNW à l’origine, et est devenu JAVA.Java est utilisé dans une grande variété de plates-formes depuis les systèmes embarqués et les téléphones mobiles, les ordinateurs individuels, les serveurs, les applications d’entreprise, les superordinateurs, etc." },' +
  '{"language":"bash","img":"images/langs-code/Bash.png","text":"Bash (acronyme de Bourne-Again shell) est un interpréteur en ligne de commande de type script. C’est le shell Unix du projet GNU.Fondé sur le Bourne shell, Bash lui apporte de nombreuses améliorations, provenant notamment du Korn shell et du C shell. Bash est un logiciel libre publié sous licence publique générale GNU. Il est l’interprète par défaut sur de nombreux Unix libres, notamment sur les systèmes GNU/Linux. C’était aussi le shell par défaut de Mac OS X, remplacé avec macOS Catalina (10.15) par zsh. Il a été d’abord porté sous Microsoft Windows par le projet Cygwin, et depuis Windows 10 constitue une option à part entière du système d’exploitation, nommée Windows Subsystem for Linux." },' +
  '{"language":"powershell","img":"images/langs-code/powershell 434.png","text":"Windows PowerShell, anciennement Microsoft Command Shell (MSH), nom de code Monad, est une suite logicielle développée par Microsoft qui intègre une interface en ligne de commande, un langage de script nommé PowerShell ainsi qu’un kit de développement. Il est inclus dans Windows 7, Windows 8.1, Windows 10 et Windows 11 (y compris les versions grand public) et s’appuie sur le framework Microsoft .NET." },' +
  '{"language":"c#","img":"images/langs-code/csharp 434.png","text":"C# (C sharp [siː.ʃɑːp] en anglais britannique) est un langage de programmation orientée objet, commercialisé par Microsoft depuis 2002 et destiné à développer sur la plateforme Microsoft .NET.Il est dérivé du C++ et très proche du Java dont il reprend la syntaxe générale ainsi que les concepts, y ajoutant des notions telles que la surcharge des opérateurs, les indexeurs et les délégués. Il est utilisé notamment pour développer des applications web sur la plateforme ASP.NET." },' +
  '{"language":"php","img":"images/langs-code/php 434.png","text":"PHP: Hypertext Preprocessor, plus connu sous son sigle PHP (sigle auto-référentiel), est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n’importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet.PHP a permis de créer un grand nombre de sites web célèbres, comme Facebook et Wikipédia. Il est considéré comme une des bases de la création de sites web dits dynamiques mais également des applications web." },' +
  '{"language":"c++","img":"images/langs-code/C++ 434.png","text":"C++ est un langage de programmation compilé permettant la programmation sous de multiples paradigmes, dont la programmation procédurale, la programmation orientée objet et la programmation générique. Ses bonnes performances, et sa compatibilité avec le C en font un des langages de programmation les plus utilisés dans les applications où la performance est critique.Créé initialement par Bjarne Stroustrup dans les années 1980, le langage C++ est aujourd’hui normalisé par l’ISO. Sa première normalisation date de 1998 (ISO/CEI 14882:1998), ensuite amendée par l’erratum technique de 2003 (ISO/CEI 14882:2003). Une importante mise à jour a été ratifiée et publiée par l’ISO en septembre 2011 sous le nom de ISO/IEC 14882:2011, ou C++11. Depuis, des mises à jour sont publiées régulièrement : en 2014 (ISO/CEI 14882:2014, ou C++14), en 2017 (ISO/CEI 14882:2017, ou C++17) puis en 2020 (ISO/IEC 14882:2020, ou C++20)." },' +
  '{"language":"typescript","img":"images/langs-code/typescript 434.png","text":"TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d’améliorer et de sécuriser la production de code JavaScript. Il s’agit d’un sur-ensemble syntaxique strict de JavaScript (c’est-à-dire que tout code JavaScript correct peut être utilisé avec TypeScript). Le code TypeScript est transcompilé en JavaScript, et peut ainsi être interprété par n’importe quel navigateur web ou moteur JavaScript. TypeScript a été cocréé par Anders Hejlsberg, principal inventeur de C#.TypeScript permet un typage statique optionnel des variables et des fonctions, la création de classes et d’interfaces, l’import de modules, tout en conservant l’approche non-contraignante de JavaScript. Il supporte la spécification ECMAScript 6.TypeScript prend en charge les fichiers de définition qui peuvent contenir des informations sur le type des bibliothèques JavaScript existantes, tout comme les fichiers d’en-tête C++ peuvent décrire la structure des fichiers objets existants. Cela permet à d’autres programmes d’utiliser les valeurs définies dans les fichiers comme s’il s’agissait d’entités TypeScript de type statique. Il existe des fichiers d’en-tête tiers pour les bibliothèques populaires telles que jQuery et D3.js. Des en-têtes TypeScript pour les modules de base Node.js sont également disponibles, permettant le développement de programmes Node.js dans TypeScript.Le compilateur TypeScript est lui-même écrit en TypeScript et compilé en JavaScript. Il est sous licence Apache License 2.0. TypeScript est inclus en tant que langage de programmation de première classe dans Microsoft Visual Studio 2013 Update 2 et versions ultérieures, à côté de C# et d’autres langages Microsoft. Une extension officielle permet également à Visual Studio 2012 de prendre en charge TypeScript. Anders Hejlsberg, architecte principal de C# et créateur de Delphi et Turbo Pascal, a travaillé sur le développement de TypeScript." },' +
  '{"language":"c","img":"images/langs-code/c 434.png","text":"C est un langage de programmation impératif généraliste, de bas niveau. Inventé au début des années 1970 pour réécrire Unix, C est devenu un des langages les plus utilisés, encore de nos jours. De nombreux langages plus modernes comme C++, C#, Java et PHP ou JavaScript ont repris une syntaxe similaire au C et reprennent en partie sa logique. C offre au développeur une marge de contrôle importante sur la machine (notamment sur la gestion de la mémoire) et est de ce fait utilisé pour réaliser les « fondations » (compilateurs, interpréteurs…) de ces langages plus modernes." },' +
  '{"language":"ruby","img":"images/langs-code/ruby 434.png","text":"Ruby est un langage de programmation libre. Il est interprété, orienté objet et multi-paradigme. Le langage a été standardisé au Japon en 2011 (JIS X 3017:2011), et en 2012 par l’Organisation internationale de normalisation (ISO 30170:2012)." },' +
  '{"language":"go","img":"images/langs-code/go 434.png","text":"Go est un langage de programmation compilé et concurrent inspiré de C et Pascal. Ce langage a été développé par Google à partir d’un concept initial de Robert Griesemer (en), Rob Pike et Ken Thompson. Go possède deux implémentations : la première utilise gc, le compilateur Go ; la seconde utilise gccgo, « frontend » GCC écrit en C++. Go est écrit en C en utilisant yacc et GNU Bison pour l’analyse syntaxique jusqu’à la version 1.4, et en Go lui-même pour les versions suivantes (1.5).Logo de Google GoMascotte de Google Go.Un objectif de Go est donné par Rob Pike, l’un de ses trois créateurs, qui dit à propos des développeurs inexpérimentés : « Ils ne sont pas capables de comprendre un langage brillant, mais nous voulons les amener à réaliser de bons programmes. Ainsi, le langage que nous leur donnons doit être facile à comprendre et facile à adopter »Go veut faciliter et accélérer la programmation à grande échelle : en raison de sa simplicité, il est donc concevable de l’utiliser aussi bien pour écrire des applications, des scripts ou de grands systèmes. Cette simplicité est nécessaire aussi pour assurer la maintenance et l’évolution des programmes sur plusieurs générations de développeurs.S’il vise aussi la rapidité d’exécution, indispensable à la programmation système, il considère le multithreading comme le moyen le plus robuste d’assurer sur les processeurs actuels cette rapidité tout en rendant la maintenance facile par séparation de tâches simples exécutées indépendamment afin d’éviter de créer des « usines à gaz ». Cette conception permet également le fonctionnement sans réécriture sur des architectures multi-cœurs en exploitant immédiatement l’augmentation de puissance correspondante." },' +
  '{"language":"assembly","img":"images/langs-code/assembly 434.png","text":"En programmation informatique , le langage d’assemblage (ou langage assembleur , ou code machine symbolique), est tout langage de programmation de bas niveau avec une très forte correspondance entre les instructions du langage et l’architecture. instructions du code machine . Le langage d’assemblage a généralement une déclaration par instruction machine (1: 1), mais les constantes, les commentaires , les directives d’ assembleur , les étiquettes symboliques de, par exemple,les emplacements de mémoire , les registres et les macros sont généralement également pris en charge." },' +
  '{"language":"swift","img":"images/langs-code/Swift 434.png","text":"Swift (langage d’Apple) est un langage de programmation objet compilé, multi-paradigmes, qui se veut simple, performant et sûr. Il est développé en open source.Le projet de développement de Swift est géré par Apple, qui en est également le principal contributeur ; mais de nombreux membres de la communauté Swift, ainsi que d’autres acteurs, tels que Google et IBM, participent également à son développement. Swift est officiellement supporté sur les systèmes d’exploitation Ubuntu, iOS, macOS, watchOS et tvOS. Un support non officiel (géré par la communauté) existe pour d’autres plateformes Linux, telles que Debian et Fedora.Un manuel officiel en anglais est disponible en ligne.Swift dispose d’une interopérabilité avec le langage C ainsi qu’avec l’Objective-C sur les plateformes d’Apple.Le compilateur de Swift utilise LLVM pour la génération du code machine." },' +
  '{"language":"kotlin","img":"images/langs-code/Kotlin 434.png","text":"Kotlin est un langage de programmation orienté objet et fonctionnel, avec un typage statique qui permet de compiler pour la machine virtuelle Java, JavaScript, et vers plusieurs plateformes en natif (grâce à LLVM). Son développement provient principalement d’une équipe de programmeurs chez JetBrains basée à Saint-Pétersbourg en Russie (son nom vient de l’île de Kotline, près de St. Pétersbourg).Google annonce pendant la conférence Google I/O 2017 que Kotlin devient le second langage de programmation officiellement pris en charge par Android après Java. Le 8 mai 2019, toujours lors de la conférence Google I/O, Kotlin devient officiellement le langage de programmation voulu et recommandé par le géant américain Google pour le développement des applications Android.Pivotal Software annonce le 4 janvier 2017 le support officiel de Kotlin sur la cinquième version du Framework Spring." },' +
  '{"language":"r","img":"images/langs-code/R 434.png","text":"R est un langage de programmation et un logiciel libre destiné aux statistiques et à la science des données soutenu par la R Foundation for Statistical Computing. Il fait partie de la liste des paquets GNU et est écrit en C, Fortran et R.GNU R est un logiciel libre distribué selon les termes de la licence GNU GPL. Le site officiel fournit des binaires pour Linux, Windows et macOS, et des portages existent pour d’autres systèmes d’exploitation.Le langage R est largement utilisé par les statisticiens, les data miners, data scientists pour le développement de logiciels statistiques et l’analyse des données.En janvier 2022, R est classé 12e dans l’index TIOBE qui mesure la popularité des langages de programmation." },' +
  '{"language":"vba","img":"images/langs-code/VBA 434.png","text":"Visual Basic for Applications (VBA) est une implémentation de Microsoft Visual Basic qui est intégrée dans toutes les applications de Microsoft Office, dans quelques autres applications Microsoft comme Visio et au moins partiellement dans quelques autres applications comme AutoCAD, WordPerfect, MicroStation, Solidworks ou encore ArcGIS. Il remplace et étend les capacités des langages macro spécifiques aux plus anciennes applications comme le langage WordBasic intégré à une ancienne version du logiciel Word, et peut être utilisé pour contrôler la quasi-totalité de l’IHM des applications hôtes, ce qui inclut la possibilité de manipuler les fonctionnalités de l’interface utilisateur comme les menus, et de personnaliser les boîtes de dialogue et les formulaires utilisateurs.Comme son nom l’indique, VBA est très lié à Visual Basic (les syntaxes et concepts des deux langages se ressemblent), mais ne peut normalement qu’exécuter du code dans une application hôte Microsoft Office (et non pas d’une application autonome, il requiert donc une licence de la suite bureautique Microsoft). Il peut cependant être utilisé pour contrôler une application à partir d’une autre (par exemple, créer automatiquement un document Word à partir de données Excel). Le code ainsi exécuté est stocké dans des instances de documents, on l’appelle également macro.VBA est fonctionnellement riche et extrêmement flexible, mais il possède d’importantes limitations, comme son support limité des fonctions de rappel (callbacks), ainsi qu’une gestion des erreurs archaïque, utilisation de handlers d’erreurs en lieu et place d’un mécanisme d’exceptions.Même si ces limitations rendent ce langage très peu utilisé par les développeurs informaticiens soucieux d’utiliser des outils avant tout performants, sa simplicité et sa facilité d’accès ont séduit certaines professions, notamment dans la finance." },' +
  '{"language":"objective-c","img":"images/langs-code/objective-c 434.png","text":"Objective-C est un langage de programmation orienté objet réflexif. C’est une extension du C ANSI, comme le C++, mais qui se distingue de ce dernier par sa distribution dynamique des messages, son typage faible ou fort, son typage dynamique et son chargement dynamique. Contrairement au C++, il ne permet pas l’héritage multiple mais il existe toutefois des moyens de combiner les avantages de C++ et d’Objective-C.Aujourd’hui, il est principalement utilisé dans les systèmes d’exploitation d’Apple : macOS et son dérivé iOS, basés sur la bibliothèque de classes Cocoa mais il existe aussi une bibliothèque de classes libre GNUstep sous GNU/Linux. Cocoa et GNUstep sont les successeurs de l’API OpenStep, utilisée dans les systèmes d’exploitation NeXTSTEP (à l’origine de macOS) et son pendant libre OPENSTEP." },' +
  '{"language":"scala","img":"images/langs-code/scala.png","text":"Scala est un langage de programmation multi-paradigme conçu à l’École polytechnique fédérale de Lausanne (EPFL) pour exprimer les modèles de programmation courants dans une forme concise et élégante. Son nom vient de l’anglais Scalable language qui signifie à peu près « langage adaptable » ou « langage qui peut être mis à l’échelle ». Il peut en effet être vu comme un métalangage.Scala intègre les paradigmes de programmation orientée objet et de programmation fonctionnelle, avec un typage statique. Il concilie ainsi ces deux paradigmes habituellement opposés (à de rares exceptions près, telle que le langage OCaml) et offre au développeur la possibilité de choisir le paradigme le plus approprié à son problème.Il est prévu pour être compilé en bytecode Java (exécutable sur la JVM), ou .NET. Seule la plateforme Java est supportée officiellement par l’EPFL.Si on souhaite l’utiliser exclusivement avec la JVM, il est alors possible d’utiliser les bibliothèques écrites en Java de façon complètement transparente. Ainsi, Scala bénéficie de la maturité et de la diversité des bibliothèques qui ont fait la force de Java depuis une dizaine d’années. De plus, il est possible d’invoquer du code écrit en Scala à partir de programmes écrits en Java ce qui facilite la transition de Java à Scala.Les développeurs habitués à un seul paradigme (par exemple ceux ayant utilisé principalement Java qui, lui, repose sur la programmation orientée objet) peuvent trouver ce langage déroutant et difficile car il nécessite l’apprentissage de concepts différents si on veut pouvoir exploiter tout son potentiel. Néanmoins, il est tout à fait possible de l’utiliser dans un premier temps comme remplaçant de Java, en profitant alors de sa syntaxe épurée, puis d’utiliser les différents « nouveaux » concepts au fur et à mesure de leur apprentissage." },' +
  '{"language":"rust","img":"images/langs-code/rust.png","text":"Rust est un langage de programmation compilé multi-paradigme conçu et développé par Mozilla Research depuis 2010. Il a été conçu pour être « un langage fiable, concurrent, pratique » supportant les styles de programmation purement fonctionnel, modèle d’acteur, procédural, ainsi qu’orienté objet sous certains aspects.En 2020, ses domaines de prédilection sont la programmation système, les applications en ligne de commande, les applications Web via WebAssembly, les services réseaux et les systèmes embarqués.Du fait de la politique de Mozilla, Rust est entièrement développé de façon ouverte (les ingénieurs de Mozilla Research publient leurs idées et les décisions prises lors des réunions) et sollicite les remarques et contributions de la communauté. La conception du langage est graduellement améliorée au travers des retours de l’équipe travaillant sur le moteur de rendu Servo et de façon pragmatique lors de l’écriture du compilateur. Bien que le projet soit financé par Mozilla, la majorité des contributions proviennent de la communauté." },' +
  '{"language":"dart","img":"images/langs-code/dart.png","text":"Dart est un langage de programmation optimisé pour les applications sur plusieurs plateformes. Il est développé par Google et est utilisé pour créer des applications mobiles, de bureau, de serveur et web.Dart est un langage orienté objet à ramasse-miettes avec une syntaxe de type C++. Dart peut se compiler en code natif ou en JavaScript. Il prend en charge les interfaces, les mixins,les classes abstraites, les génériques réifiés et l’inférence de type." },' +
  '{"language":"elixir","img":"images/langs-code/elixir.png","text":"Elixir est un langage de programmation multi-paradigme fonctionnant sur la machine virtuelle Erlang (BEAM). Il est créé en 2011 par le développeur José Valim, personnalité du monde Ruby et l’un des premiers contributeurs au framework de programmation Ruby on Rails. Il intègre les paradigmes de programmation fonctionnelle, programmation concurrente et programmation orientée processus (en), et supporte la métaprogrammation via un système de macros et le polymorphisme via un système dit de protocoles." },' +
  '{"language":"clojure","img":"images/langs-code/clojure.png","text":"Clojure est un langage de programmation fonctionnel compilé, multi-plateforme et destiné à la création de programmes sûrs et facilement distribuables. C’est un dialecte de Lisp. Il transpile vers du bytecode Java, du code JavaScript et du bytecode .NET. Clojure est donc disponible sur la JVM, le CLR, les navigateurs et Node.js." },' +
  '{"language":"webassembly","img":"images/langs-code/webassembly.png","text":"WebAssembly, abrégé wasm, est un standard du World Wide Web pour le développement d’applications. Il est conçu pour compléter JavaScript avec des performances supérieures. Le standard consiste en un bytecode, sa représentation textuelle et un environnement d’exécution dans un bac à sable compatible avec JavaScript. Il peut être exécuté dans un navigateur Web et en dehors. WebAssembly est standardisé dans le cadre du World Wide Web Consortium.Comme WebAssembly ne spécifie qu’un langage de bas niveau, le bytecode est généralement produit en compilant un langage de plus haut niveau. Parmi les premiers langages supportés figurent Rust avec le projet/module (crate) wasm-bindgen ainsi que le C et C++, compilés avec Emscripten (basé sur LLVM). De nombreux autres langages de programmation possèdent aujourd’hui un compilateur WebAssembly, parmi lesquels : C#, Go, Java, Lua, Python ou Ruby.Les navigateurs Web compilent le bytecode wasm dans le langage machine de l’hôte sur lequel ils sont utilisés avant de l’exécuter." }]}';
const obj = JSON.parse(langObj);

fetch("languages.json");
async function fetchThis() {
  const response = await fetch("languages.json");
  if (response.ok) {
    const data = await response.json();
    console.log(data); // give the tree structure
    var road = data.legals.legal;
    for (let i = 0; i < road.length; i++) {
      document.getElementById("men-leg-title").innerHTML = road[i].title;
      document.getElementById("men-leg-p").innerHTML = road[i].content;
      console.log(road[i].content);
    }
  }
}
document.getElementById("m-l").addEventListener("click", () => {
  document.getElementById("mention-legales").style.transform = "scale(1)";
  fetchThis();
  hideShit("yes");
});
document.getElementById("men-leg-ok").addEventListener("click", () => {
  document.getElementById("mention-legales").style.transform = "scale(0)";
  hideShit("no");
});

document.onkeydown = function karlove(evt) {
  document.getElementById("u-win").classList.remove("anim");
  document.getElementById("wrong").classList.remove("animation");
  document.getElementById("dj-trou").classList.remove("anim");
  document.getElementById("trouves").style.transform = "scale(0)";
  evt = evt || window.event;
  var charCode = evt.key || evt.which;

  breakit: if (
    charCode === "Enter" &&
    document.getElementById("input-field").value != "" &&
    tutorial == false
  ) {
    myText = document.getElementById("input-field").value;
    myText = myText.toLowerCase();
    if (myText == "karolos") {
      document.getElementById("secret").innerHTML = ":)";
      checkOverlays("esc");
      document.getElementById("input-field").value = "";
      break breakit;
    }

    fixErrors(myText);
    myText = document.getElementById("input-field").value;
    x = checkDoubles(myText);

    if (x == false) {
      checkLang(myText);
    } else {
      document.getElementById("dj-trou").classList.add("anim");
      checkOverlays("esc");
    }
  }

  if (charCode === "Escape" && tutorial == false) {
    checkOverlays("esc");
    console.log("im here");
  }
  if (charCode !== "Escape" && charCode !== "Enter" && tutorial == false) {
    checkOverlays("guess");
  }
};

document.querySelector(".jcl-mj").addEventListener("click", () => {
  tutorial = false;
  document.getElementById("overlay-tutorial").style.transform = "scale(0)";
  checkOverlays("esc");
});

let codeLang = [
  "javascript",
  "html",
  "css",
  "sql",
  "python",
  "java",
  "bash",
  "powershell",
  "c#",
  "php",
  "c++",
  "typescript",
  "c",
  "ruby",
  "go",
  "assembly",
  "swift",
  "kotlin",
  "r",
  "vba",
  "objective-c",
  "scala",
  "rust",
  "dart",
  "elixir",
  "clojure",
  "webassembly",
]; //28
let codeLangCorrect = [];
let pointVault = [0, 0, 0, 0, 0];
let count = 0;
let points = 0;
let strikePoints = 1;

function fixErrors(olop) {
  let olo = olop.toLowerCase();
  console.log(olo);
  if (olo == "js") {
    olo = "javascript";
    document.getElementById("input-field").value = olo;
  }
  if (olo == "power shell") {
    olo = "powershell";
    document.getElementById("input-field").value = olo;
  }
  if (olo == "type script") {
    olo = "typescript";
    document.getElementById("input-field").value = olo;
  }
  if (olo == "asembly") {
    olo = "assembly";
    document.getElementById("input-field").value = olo;
  }
  if (olo == "closure") {
    olo = "clojure";
    document.getElementById("input-field").value = olo;
  }
  if (olo == "objective c" || olo == "objectivec") {
    olo = "objective-c";
    document.getElementById("input-field").value = olo;
  }
  if (olo == "web assemby" || olo == "web asembly" || olo == "webasembly") {
    olo = "webassembly";
    document.getElementById("input-field").value = olo;
  }
  document.getElementById("input-field").value = olo;
}

function checkLang(toto) {
  cosmos = false;
  for (var i = 0; i < codeLang.length; i++) {
    if (toto == codeLang[i]) {
      codeLangCorrect.unshift(codeLang[i]);
      window.localStorage.setItem("answerKey", JSON.stringify(codeLangCorrect));
      y = codeLangCorrect.length - 1;
      const para = document.createElement("btn-style-off");
      para.onmouseover = function () {
        this.style =
          "width: 100px; text-align:center; text-decoration: none; background-color: white; border-left: 1px solid rgb(22, 170, 207);border-right: 1px solid rgb(199, 88, 140); border-top: none; border-bottom: none; color: black; cursor: pointer; font-family:gothammedium; font-size: 11px;";
      };
      para.onmouseout = function () {
        this.style =
          "width: 100px; text-align:center; text-decoration: none; background-color: transparent; border-left: 1px solid white;border-right: 1px solid white; border-top: none; border-bottom: none; color: white; cursor: pointer; font-family:gothammedium; font-size: 11px;";
      };

      para.innerText = codeLang[i];

      for (let i = 0; i < obj.langArray.length; i++) {
        if (para.innerText == obj.langArray[i].language) {
          document.querySelector(".trouv-title").innerHTML =
            obj.langArray[i].language;
          document.getElementById("img-434").src = obj.langArray[i].img;
          document.getElementById("id-obj-p").innerHTML = obj.langArray[i].text;
        }
      }

      if (document.getElementById("myCheck").checked == false && win == false) {
        setTimeout(function () {
          document.getElementById("trouves").style.transform = "scale(1)";
          hideShit("yes");
        }, 1000);
        autoClose(true);
      }

      para.onclick = function () {
        for (let i = 0; i < obj.langArray.length; i++) {
          if (para.innerText == obj.langArray[i].language) {
            document.querySelector(".trouv-title").innerHTML =
              obj.langArray[i].language;
            document.getElementById("img-434").src = obj.langArray[i].img;
            document.getElementById("id-obj-p").innerHTML =
              obj.langArray[i].text;
          }
        }
      };
      if (y <= 13) {
        document.getElementById("lan-trou-list1").appendChild(para);
        document.getElementById("lan-trou-list1").appendChild(para).style =
          "width: 100px; text-align:center; text-decoration: none; background-color: transparent; border-left: 1px solid white;border-right: 1px solid white; border-top: none; border-bottom: none; color: white; cursor: pointer; font-family:gothammedium; font-size: 11px;";
      } else {
        document.getElementById("lan-trou-list2").appendChild(para);
        document.getElementById("lan-trou-list2").appendChild(para).style =
          "width: 100px; text-align:center; text-decoration: none; background-color: transparent; border-left: 1px solid white;border-right: 1px solid white; border-top: none; border-bottom: none; color: white; cursor: pointer;  font-family:gothammedium; font-size: 11px;";
      }

      checkOverlays("win");
      document.getElementById("u-win").classList.add("anim");

      points = points + 1;
      strikePoints *= 2;
      f = pad(points);
      document.getElementById("points").innerHTML = f;
      codeLang.splice(i, 1);
      pointVault[0] = points;
      pointVault[1] = strikePoints;
      cosmos = true;
      if (points >= 26) {
        win = true;
      }
      if (points >= 27) {
        document.getElementById("game-over").style.transform = "scale(1)";
        document.getElementById("image-ftw").src = "images/win.png";
        document.getElementById("box-stats").style.backgroundImage =
          "url('images/game over empty.png')";
        document.getElementById("end-btn-1").style.display = "none";

        hideShit("yes");
        disableKeyboard();
        startCounter();
      }

      document.getElementById("input-field").value = "";

      break;
    }
  }

  if (cosmos == false) {
    document.getElementById("wrong").classList.add("animation");
    count = countErrors(count);
    if (count >= 3) {
      hideShit("yes");
      disableKeyboard();
      document.getElementById("game-over").style.transform = "scale(1)";
      document.getElementById("end-btn-2").style.display = "none";
      startCounter();
    }
  }
  if (count < 3 && win == false) {
    checkOverlays("esc");
  }
}

function disableKeyboard() {
  document.onkeydown = function (e) {
    return false;
  };
}

function checkDoubles(kar) {
  for (var i = 0; i < codeLangCorrect.length; i++) {
    if (kar === codeLangCorrect[i]) {
      return true;
    }
  }
  return false;
}

function bigImg() {
  this.style.color = "black";
}

function checkOverlays(kar) {
  if (kar == "guess") {
    document.getElementById("overlay-kar").style.transform = "scale(1)";
    document.getElementById("u-win").style.transform = "scale(0)";
    document.getElementById("trouves").style.transform = "scale(0)";
    hideShit("yes");
  }
  if (kar == "win") {
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("u-win").style.transform = "scale(1)";
    document.getElementById("trouves").style.transform = "scale(0)";
    hideShit("yes");
  }
  if (kar == "trou") {
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("u-win").style.transform = "scale(0)";
    document.getElementById("trouves").style.transform = "scale(1)";
    hideShit("yes");
  }
  if (kar == "esc") {
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("u-win").style.transform = "scale(0)";
    document.getElementById("trouves").style.transform = "scale(0)";
    document.getElementById("mention-legales").style.transform = "scale(0)";
    document.getElementById("input-field").value = "";
    hideShit("no");
  }
  if (kar == "tuto") {
    document.getElementById("overlay-kar").style.transform = "scale(0)";
    document.getElementById("input-field").value = "";
  }
}

function countErrors(count) {
  count = count + 1;
  window.localStorage.setItem("errorsKey", JSON.stringify(count));
  switch (count) {
    case 1:
      console.log("case 1");
      document.getElementById("id-x1").style.color = "#0AEFF7";
      pointVault[2] = pointVault[1];
      pointVault[1] = 0;
      strikePoints = 1;
      break;
    case 2:
      document.getElementById("id-x2").style.color = "#0AEFF7";
      pointVault[3] = pointVault[1];
      pointVault[1] = 0;
      strikePoints = 1;
      break;
    case 3:
      document.getElementById("id-x3").style.color = "#0AEFF7";
      pointVault[4] = pointVault[1];
      pointVault[1] = 0;
      strikePoints = 1;
      break;
    default:
      console.log("default");
  }
  return count;
}

function hideShit(shit) {
  imTired = document.querySelectorAll(".closeThis");
  if (shit == "yes") {
    for (var i = 0; i < imTired.length; i++) {
      imTired[i].style = "display:none";
    }
  } else {
    for (var i = 0; i < imTired.length; i++) {
      imTired[i].style = "display:block";
    }
  }
}

function forceHide() {
  imTired = document.querySelectorAll(".closeThis");
  for (var i = 0; i < imTired.length; i++) {
    imTired[i].style = "display:none";
  }
}

function pad(num) {
  let numnum = num;
  num = num.toString();
  if (numnum < 10) {
    num = "0" + num;
  }
  return num;
}

function autoClose(kar) {
  if (kar) {
    setTimeout(function () {
      document.getElementById("trouves").style.transform = "scale(0)";
      hideShit("no");
    }, 3000);
  }
}

// ----------------------BUTTONS-------------------------------
document.getElementById("id-results").addEventListener("click", () => {
  checkOverlays("trou");
});
document.getElementById("close-img").addEventListener("click", () => {
  checkOverlays("esc");
});

// ------------------------------counter-----------------------------


function startCounter() {
  totalStrikes = pointVault[1] + pointVault[2] + pointVault[3] + pointVault[4];
  if (points >= 3) {
    if (counterPhase == 1) {
      document.querySelector(".finalist").style.color = "white";
      document.querySelector("#counterOne").style.color = "white";
      let counts = setInterval(updated, 150);

      function updated() {
        var karcount = document.getElementById("counterOne");
        karcount.innerHTML = ++upto;
        if (upto >= points) {
          clearInterval(counts);
          console.log("after clear interval");
          upto = 1;
          document.querySelector("#fin2").style.color = "white";
          document.querySelector("#counterTwo").style.color = "white";
          let counts2 = setInterval(updated2, 100);
          function updated2() {
            var karcount = document.getElementById("counterTwo");
            karcount.innerHTML = ++upto;
            if (upto >= totalStrikes) {
              clearInterval(counts2);
              document.querySelector("#fin3").style.color = "white";
              document.querySelector("#secret").style.color = "white";
              setTimeout(function () {
                document.getElementById("fin4").style.color = "white";
                document.getElementById("counterThree").innerHTML =
                  points + totalStrikes;
              }, 1000);
            }
          }
        }
      }
    }
  } else {
    document.querySelector(".finalist").style.color = "white";
    document.querySelector("#counterOne").style.color = "white";
    document.getElementById("counterOne").innerHTML = points;
    document.querySelector("#fin2").style.color = "white";
    document.querySelector("#counterTwo").style.color = "white";
    document.querySelector("#counterTwo").innerHTML = totalStrikes;
    document.querySelector("#fin3").style.color = "white";
    document.querySelector("#secret").style.color = "white";
    document.getElementById("fin4").style.color = "white";
    document.getElementById("counterThree").innerHTML = points + totalStrikes;
  }
}
