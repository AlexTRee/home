const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alex",
  middleName: "",
  lastName: "Cui",
  message: " Passionate about pioneering advancements into a new era of personalized diagnosis and precision medicine. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tiangecui/",
    },
    {
      image: "fa-github",
      url: "https://github.com/alextree",
    },
    {
      image: "fa-google-scholar",
      url: "https://scholar.google.com/citations?user=t17-GTQAAAAJ",
    },
    {
      image: "fa-researchgate",
      url: "http://binf.gmu.edu/tcui/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/alextree/",
    },
  ]
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/alexcui.png"),
  imageSize: 375,
  message:
    "Hi, I’m Alex Cui, a seasoned Computational Scientist with over a decade of experience in bioinformatics and computational biology. I specialize in helping biotech and pharma companies build robust bioinformatics pipelines and computational tools to advance data analytics and scientific discovery. I hold a Ph.D. in Bioinformatics & Computational Biology from George Mason University, an M.S. in Biology from Rutgers University, and a B.E. in Bioengineering from Wuhan Institute of Technology. I’m passionate about creating innovative solutions and transforming data into actionable insights using Python, R, SQL, Shell scripting, and other engineering best practices. My expertise spans Bioinformatics, Statistics, Machine Learning, Cancer Oncology, Immunology, Molecular Biology, Human Genetics, Genomics, and Virology. Outside of work, I enjoy photography and movies. A fun fact about me: I have a growing collection of vintage cameras and lenses, reflecting my love for capturing moments through a historical lens.",
  resume: "https://www.linkedin.com/in/tiangecui/",
};


const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Sr. Bioinformatics Scientist',
      companylogo: require('../assets/img/psnl.png'),
      date: 'February 2022 – January 2024',
      companyname: "Personalis, Inc.",
      description: (
        <>
          <ul>
            <li>
              Worked closely with bench scientists under Assay R&D dept. to troubleshoot issues and analyze data.
              <br />
              <u>Main achievements:</u>
              <ul>
                <li>Built a visualization pipeline using Nextflow for key NGS metrics to QC sequencing data quality</li>
                <li>Completed the analytical validation of the cfDNA-based MRD assay - NeXT Personal®</li>
                <li>Stratified Immune Checkpoint Inhibitors (ICI) treated patients via ctDNA signals</li>
                <li>
                  Improved a background error suppression model and the filtering strategy for somatic variant calling
                  and tumor-informed panel design; simplified panel QC with consolidated PON variants
                </li>
                <li>Validated single-cell RNA-seq TCR/BCR immune repertoire results against ImmunoID NeXT®</li>
                <li>Generated versioning documentation of the workflows and tools for regulatory review</li>
              </ul>
            </li>
            <li>
              Led Advanced Technology group under Assay R&D dept. to scout and validate new NGS technologies.
              <br />
              <u>Main achievements:</u>
              <ul>
                <li>Full-cycle performance evaluation of Ultima Genomics (UG)’ new sequencer UG100 for WGS</li>
                <li>Developed a workflow wrapper for UG Whole Genome Methylation Sequencing</li>
                <li>Developed an Ultima Genomics Analysis Toolkit (UGAT) for UG data on HPC and Google Cloud</li>
                <li>Evaluated various commercial FFPE Repair Kits and Enzymatic Fragmentation Kits</li>
                <li>
                  Evaluated novel single-duplex DNA sequencing and CRISPR-based genome depletion methods
                </li>
                <li>Evaluated and compared Sentieon and Google DeepVariant variant calling pipelines</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      role: 'Principal Bioinformatics Scientist',
      companylogo: require('../assets/img/shihua.png'),
      date: 'June 2021 – December 2021',
      companyname: "Shihua Medical, Inc.",
      description: (
        <>
          <ul>
            <li>Worked as the founding bioinformatics scientist (reported to the CSO)</li>
            <li>
              Built the company’s prototype bioinformatics and data analytics cloud
              computing infrastructure and a whole suite of computational analysis
              pipelines for personalized targeted NGS panels and automated report
              generation for breast cancer patients.
            </li>
          </ul>
        </>
      ),
    },
    {
      role: 'Bioinformatics Engineer II',
      companylogo: require('../assets/img/sgmo.png'),
      date: 'July 2020 – June 2021',
      companyname: "Sangamo Therapeutics, Inc.",
      description: (
        <>
          <ul>
            <li>
              Supported Genome Engineering group for genomic engineering and data mining.
              <br />
              <ul>
                <li>
                  Developed an automated analysis pipeline for Affymetrix Clariom D microarray assay with streamlined differential gene expression analysis and volcano plot visualization for top gene.
                </li>
                <li>
                  Designed over 20 lead candidates with tissue-specific gene expressions to target the pathogenic mutations as a therapeutic strategy for several CNS diseases.
                </li>
                <li>
                  Explored regulatory elements with the combination of ChIP-seq and ATAC-seq data.
                </li>
                <li>
                  Curated and integrated bulk and single-cell RNA-seq data from public data banks (e.g., GTEx, BrainMap, DropViz, TCGA, etc.), performed data mining of regulatory element (RE) databases (e.g., ENCODE, FANTOM5, ORegAnno, CATlas, etc.) to find REs in enhancers and promoters.
                </li>
                <li>
                  Developed workflows for batch processing tasks on SevenBridges platform for lab scientists.
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      role: 'Computational Scientist',
      companylogo: require('../assets/img/cofactor.png'),
      date: 'July 2018 – May 2020',
      companyname: "Cofactor Genomics, LLC.",
      description: (
        <>
          <ul>
            <li>
              Led the analytical validation of the RNASeq-based clinical immuno-profiling ImmunoPrism® assay.
              <br />
              <ul>
                <li>
                  Applied machine learning regression algorithms to build Health Expression Models for eight immune cells and improve the performance of Predictive Immune Modeling for ImmunoPrism®.
                </li>
                <li>
                  Mining databases (e.g., GTEx, CCLE, GDC, Human Cell Atlas, etc.) to refine basis matrix genes.
                </li>
                <li>
                  Applied multidimensional biomarker approach to predict patients’ ICI treatment responses.
                </li>
                <li>
                  Integrated and maintained both development and production pipelines for bulk-/scRNA-seq analysis, cloud computing platforms (AWS and Azure), and company GitHub repos.
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      role: 'Computational Biology Research Intern',
      companylogo: require('../assets/img/vrtx.png'),
      date: 'May 2016 – August 2016',
      companyname: "Vertex Pharmaceuticals, Inc.",
      description: (
        <>
          <ul>
            <li>
              Worked at Modeling & Informatics group to investigate a ligand-based drug design software FTrees:
            </li>
            <ul>
              <li>
                Integrated and automated the workflow of FTrees with Vertex’s internal software and chemical database to enable medicinal chemists to find similar compounds with novel 3D structures.
              </li>
              <li>
                Generated a new knowledge space for FTrees to query using in-house customized reagents.
              </li>
              <li>
                Developed two wrappers for FTrees that were included in the VSL (Vertex Scripting Library).
              </li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      role: 'Bioinformatics Research Intern',
      companylogo: require('../assets/img/regn.png'),
      date: 'May 2015 – August 2015',
      companyname: "Regeneron Pharmaceuticals, Inc.",
      description: (
        <>
          <ul>
            <li>
              Worked at Velocigene dept. and BiCS group to help bench scientists develop:
            </li>
            <ul>
              <li>
                A web portal and GUI for Velocigene's CRISPR-Cas9 mediated Amplicon-Seq analysis pipeline.
              </li>
              <li>
                A string-matching script to filter and format BLAT search results for recombination oligos, TaqMan assays, and mouse genetic modifications, with a final success rate of 98.3%.
              </li>
              <li>
                A sync method to sync tracks between Velociweb and UCSC Genome Browser.
              </li>
              <li>A complete data migration for REGN’s legacy database.</li>
              <li>
                Maintenance of REGN’s production servers and websites (Velociweb and REGN mirror of UCSC Genome Browser), and the visualizations for gene targeting constructs.
              </li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      role: 'Bioinformatics Analyst',
      companylogo: require('../assets/img/ru.png'),
      date: 'May 2012 – May 2013',
      companyname: "Center of Computational and Integrative Biology, Rutgers University",
      description: (
        <>
          <ul>
            <li>
              Developed a Java-based genome browser, Genome Navigator (GN) for NGS data visualization.
            </li>
            <ul>
              <li>
                Applied GN to collaboration projects (such as <i>N. Crassa</i> circadian rhythm study, <i>Drosophila Melanogaster</i> SNPs discovery, miRNA secondary structure visualization, etc.)
              </li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      role: 'Research Technician',
      companylogo: require('../assets/img/ncpc.png'),
      date: 'September 2007 – December 2008',
      companyname: "New Drug R&D Center, North China Pharmaceuticals Corp.",
      description: "- R&D on the drug candidates, including the expression vector construction of recombinant Human Serum Albumin-EPO (HSA-EPO) fusion protein drugs. Transformation and screening of yeast strains"
    },
  ],
};


// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Past Projects",
  gitHubUsername: "alextree", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["home", "ML_projects", "ExACvcf", "nullfunction"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Pub",
  message: `
    - J. Northcott, T. Cui, J. Lyle, et al. <a href="https://www.oncotarget.com/article/28565" target="_blank" rel="noopener noreferrer">Analytical Validation of NeXT Personal®, an Ultra-sensitive Personalized Circulating Tumor DNA Assay</a>. (Oncotarget 2024; 15:200-218)<br />
    - I. Schillebeeckx, T. Cui, J. Armstrong, et al. Analytical Performance of an Immunoprofiling Assay Based on RNA Models. (J Mol Diagn. 2020 Apr;22(4):555-570)<br />
    - AM. Ismail, T. Cui, D. Seto, et al. Genomic analysis of a large set of currently- and historically- important human adenovirus pathogens. (Emerg. Microbes Infect. 2018 Feb 7;7(1):10) (Co-first author)<br />
    - SM. Gordon, T. Cui, et al. Identification of a High-Density Lipoprotein Proteomic Signature Associated with Atherosclerosis Severity in Humans. (Arteriosclerosis, Thrombosis, & Vascular Biology 2016; 36: A15)<br />
    - B. Veytsman, T. Cui, A. Baranova et al. Distance-based classifiers as potential diagnostic and prediction tools for human diseases. (BMC Genomics 2014, 15(Suppl 12): S10)<br />
    - A. Naqvi, T. Cui, and A. Grigoriev. Visualization of nucleotide substitutions in the transcriptome. (BMC Genomics 2014, 15(Suppl 4): S9)<br />
  `,
  images: [
    { 
      img: require("../editable-stuff/alexcui.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/alexcui.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const publications = {
  show: true,
  heading: "Publications",
  sections: [
    {
      subheading: "Peer-reviewed Papers",
      papers: [
        {
          title: "Analytical Validation of NeXT Personal®, an Ultra-sensitive Personalized Circulating Tumor DNA Assay",
          link: "https://doi.org/10.18632/oncotarget.28565",
          description: `J. Northcott, <b>T. Cui</b>, J. Lyle, <i>et al.</i> (<b><i>Oncotarget</i></b>, 2024; 15:200-218)`,
        },
        {
          title: "Analytical Performance of an Immunoprofiling Assay Based on RNA Models",
          link: "https://doi.org/10.1016/j.jmoldx.2020.01.009",
          description: `I. Schillebeeckx, <b>T. Cui</b>, J. Armstrong, <i>et al.</i> (<b><i>J Mol Diagn.</i></b>, 2020 Apr;22(4):555-570)`,
        },
        {
          title: "Genomic analysis of a large set of currently- and historically- important human adenovirus pathogens",
          link: "https://doi.org/10.1038/s41426-017-0004-y",
          description: `AM. Ismail, <b>T. Cui</b>, D. Seto, <i>et al.</i> (<b><i>Emerg. Microbes Infect.</i></b>, 2018 Feb 7;7(1):10)<b>(Co-first author)</b>`,
        },
        {
          title: "Identification of a High-Density Lipoprotein Proteomic Signature Associated with Atherosclerosis Severity in Humans",
          link: "https://doi.org/10.1161/atvb.36.suppl_1.15",
          description: `SM. Gordon, <b>T. Cui</b>, <i>et al.</i> (<b><i>Arteriosclerosis, Thrombosis, & Vascular Biology</i></b>, 2016; 36: A15)`,
        },
        {
          title: "Distance-based classifiers as potential diagnostic and prediction tools for human diseases",
          link: "https://doi.org/10.1186/1471-2164-15-S12-S10",
          description: `B. Veytsman, <b>T. Cui</b>, and A. Baranova. (<b><i>BMC Genomics</i></b>, 2014, 15(Suppl 12),S10)`,
        },
        {
          title: "Visualization of nucleotide substitutions in the transcriptome",
          link: "https://doi.org/10.1186/1471-2164-15-S4-S9",
          description: `B. Veytsman, <b>T. Cui</b>, and A. Baranova. (<b><i>BMC Genomics</i></b>, 2014, 15(Suppl 12),S10)`,
        },
      ],
    },
    {
      subheading: "Conference Posters & Abstracts",
      papers: [
        {
          title: "Analytic validation of an ultra-sensitive tumor-informed circulating tumor DNA assay based on whole genome sequencing",
          link: "https://www.personalis.com/wp-content/uploads/2024/04/AACR24_PER_Science-Poster_NP_Analytical_Validation.pdf",
          description: `J. Northcott, <b>T. Cui</b>, J. Lyle, <i>et al.</i> (<b><i>AACR. Cancer Res.</i></b>, 2024 84 (6_Supplement): 5034)`,
        },
        {
          title: "RNA-Based Multidimensional Biomarker Discovery",
          link: "https://hopscotch.key4events.com/AbstractList.aspx?e=141&preview=1&aig=-1&ai=8829",
          description: `N. Lafranzo, K. Flanagan, and <b>T. Cui</b> (<b><i>IUPAC Paris</i></b>, 2019, CL024)`,
        },
        {
          title: "PreDist: A distance-based model as potential diagnostic and prediction classifiers for human diseases",
          link: "https://www.nhlbi.nih.gov/events/2017/systems-biology-conference-2017",
          description: `<b>T. Cui</b>, A. Baranova, <i>et al.</i> (<b><i>NHLBI Systems Biology Conference</i></b>, 2017, 15)`,
        },
        {
          title: "Distance-based profiling aids in evaluation of ageing-related phenomena",
          link: "https://mccmb.belozersky.msu.ru/2015/proceedings/abstracts/47.pdf",
          description: `L. Wang, <b>T. Cui</b>, A. Baranova, <i>et al.</i> (<b><i>MCCMB. J. Bioinform. Comput. Biol.</i></b>, 2016, 14(2), 47)`,
        },
      ],
    },
    {
      subheading: "Scholarly Works",
      papers: [
        {
          title: "PreDist: A distance-based model as potential diagnostic and prediction classifiers for human diseases",
          link: "https://www.proquest.com/openview/05547de304d96358af963b25c677a273",
          description: `<b>T. Cui</b> and A. Baranova. (<b>[PhD. Dissertation]</b> Nov. 2018)`,
        },
        {
          title: "Development of a prototype visualization approach for next-generation sequencing technologies using Genome Navigator (GN) framework",
          link: "https://rucore.libraries.rutgers.edu/rutgers-lib/37287",
          description: `<b>T. Cui</b> and A. Grigoriev. (<b>[Master's Thesis]</b> May 2012)`,
        },
      ],
    },
    {
      subheading: "Book Chapters",
      papers: [
        {
          title: "Practical Detection of Biological Age: Why It Is not a Trivial Task.",
          link: "https://www.proquest.com/openview/05547de304d96358af963b25c677a273",
          description: `B. Veytsman, <b>T. Cui</b> and A. Baranova. (In <b>A. Moskalev (eds) </b> <b><i>Biomarkers of Human Aging. Healthy Ageing and Longevity vol. 10</i></b>, Springer, Cham. 2019)`,
        },
      ],
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "NGS Data Analytics", value: 90 },
    { name: "Bioinformatics Pipeline Development", value: 85 },
    { name: "Machine Learning", value: 65 },
    { name: "Statistics Modeling", value: 75 },
    { name: "Python", value: 90 },
    { name: "R", value: 90 },
    { name: "SQL", value: 80 },
    { name: "Linux Shell (Bash scripting)", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 80 },
    { name: "Leadership", value: 87 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: (
    <>
      I'm always excited about new technologies and novel approaches to tackle{" "}<s>CANCER</s>. If you have new positions available in the Bioinformatics/Data Engineering space, or if you just want to say Hi and ask questions, please feel free to email me at</>),
  email: "alextreecn2 [at] gmail.com",
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, experiences, publications, repos, skills, leadership, getInTouch };
