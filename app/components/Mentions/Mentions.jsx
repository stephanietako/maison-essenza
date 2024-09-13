import React from "react";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";

const Mentions = () => {
  return (
    <div className={styles.container}>
      <h1>Mentions Légales</h1>
      <Link href="/">
        <h2>Accueil </h2>
      </Link>
      <section>
        <p>
          Merci de lire avec attention les différentes modalités
          d&apos;utilisation du présent site avant d&apos;y parcourir ses pages.
          En vous connectant sur ce site, vous acceptez sans réserves les
          présentes modalités.
        </p>
      </section>

      <section>
        <h2>Responsables du site</h2>
        <p>
          Conformément à l&apos;Article n°6 de la Loi n°2004-575 du 21 Juin 2004
          pour la confiance dans l&apos;économie numérique, les responsables du
          présent site internet{" "}
          <a
            href="https://maison-essenza.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://maison-essenza.com
          </a>{" "}
          sont :
        </p>
        <ul>
          <li>
            <strong>Éditeur du Site :</strong> Directeur de publication :
            Matthieu Lehmann
          </li>
          <li>
            <strong>Téléphone :</strong> +33(0)4 51 55 51 60
          </li>
          <li>
            <strong>Email :</strong>{" "}
            <a href="mailto:hello@maison-essenza.com">
              hello@maison-essenza.com
            </a>
          </li>
          <li>
            <strong>Site Web :</strong>{" "}
            <a
              href="https://maison-essenza.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              maison-essenza.com
            </a>
          </li>
          <li>
            <strong>Société :</strong> Maison Essenza, 33, rue Marceau - 83310;
            SAS au capital social de 7 500,00 Euros
          </li>
          <li>
            <strong>Siret :</strong> 49878741500021
          </li>
          <li>
            <strong>Numéro de TVA intracommunautaire :</strong> FR02498787415
          </li>
        </ul>
      </section>

      <section>
        <h2>Création et Hébergement</h2>
        <p>
          <strong>Création :</strong> Tako Dev
        </p>
        <p>
          <strong>Hébergement :</strong> OVH
        </p>
      </section>

      <section>
        <h2>Conditions d&apos;utilisation</h2>
        <p>
          Ce site (www.maison-essenza.com) est proposé en différents langages
          web (HTML, HTML5, Javascript, CSS, etc.) pour un meilleur confort
          d&apos;utilisation et un graphisme plus agréable. Nous vous
          recommandons de recourir à des navigateurs modernes comme Internet
          Explorer, Safari, Firefox, Google Chrome, etc.
        </p>
      </section>

      <section>
        <h2>Responsabilité de l&apos;éditeur</h2>
        <p>
          Les informations et/ou documents figurant sur ce site et/ou
          accessibles par ce site proviennent de sources considérées comme étant
          fiables. Toutefois, ces informations et/ou documents sont susceptibles
          de contenir des inexactitudes techniques et des erreurs
          typographiques.
        </p>
        <p>
          L&apos;éditeur, Maison Essenza, se réserve le droit de les corriger,
          dès que ces erreurs sont portées à sa connaissance. Il est fortement
          recommandé de vérifier l&apos;exactitude et la pertinence des
          informations et/ou documents mis à disposition sur ce site. Les
          informations et/ou documents disponibles sur ce site sont susceptibles
          d&apos;être modifiés à tout moment, et peuvent avoir fait l&apos;objet
          de mises à jour. En particulier, ils peuvent avoir fait l&apos;objet
          d&apos;une mise à jour entre le moment de leur téléchargement et celui
          où l&apos;utilisateur en prend connaissance.
        </p>
        <p>
          L&apos;utilisation des informations et/ou documents disponibles sur ce
          site se fait sous l&apos;entière et seule responsabilité de
          l&apos;utilisateur, qui assume la totalité des conséquences pouvant en
          découler, sans que l&apos;éditeur, Maison Essenza, puisse être
          recherché à ce titre, et sans recours contre ce dernier.
        </p>
        <p>
          L&apos;éditeur, Maison Essenza, ne pourra en aucun cas être tenu
          responsable de tout dommage de quelque nature qu&apos;il soit
          résultant de l&apos;interprétation ou de l&apos;utilisation des
          informations et/ou documents disponibles sur ce site.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Le site maison-essenza.com peut être amené à vous demander
          l&apos;acceptation des cookies pour des besoins de statistiques et
          d&apos;affichage. Un cookie est une information déposée sur votre
          disque dur par le serveur du site que vous visitez. Il contient
          plusieurs données qui sont stockées sur votre ordinateur dans un
          simple fichier texte auquel un serveur accède pour lire et enregistrer
          des informations. Certaines parties de ce site ne peuvent être
          fonctionnelles sans l&apos;acceptation de cookies.
        </p>
      </section>

      <section>
        <h2>Liens hypertextes</h2>
        <p>
          Le site www.maison-essenza.com peut contenir des liens hypertextes
          vers d&apos;autres sites présents sur le réseau Internet. Les liens
          vers ces autres ressources vous font quitter le site
          www.maison-essenza.com.
        </p>
        <p>
          Il est possible de créer un lien vers la page de présentation de ce
          site sans autorisation expresse de l&apos;éditeur, Maison Essenza.
        </p>
        <p>
          Aucune autorisation ou demande d&apos;information préalable ne peut
          être exigée par l&apos;éditeur, Maison Essenza, à l&apos;égard
          d&apos;un site qui souhaite établir un lien vers le site de
          l&apos;éditeur, Maison Essenza. Il convient toutefois d&apos;afficher
          ce site dans une nouvelle fenêtre du navigateur.
        </p>
        <p>
          Cependant, l&apos;éditeur, Maison Essenza, se réserve le droit de
          demander la suppression d&apos;un lien qu&apos;il estime non conforme
          à l&apos;objet du site www.maison-essenza.com.
        </p>
      </section>

      <section>
        <h2>Services fournis</h2>
        <p>
          L&apos;ensemble des activités de la société ainsi que ses informations
          sont présentés sur notre site{" "}
          <a
            href="https://www.maison-essenza.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.maison-essenza.com
          </a>
          .
        </p>
        <p>
          LG Partenaires s&apos;efforce de fournir sur le site
          www.maison-essenza.com des informations aussi précises que possible.
          Les renseignements figurant sur le site www.maison-essenza.com ne sont
          pas exhaustifs et les photos non contractuelles. Ils sont donnés sous
          réserve de modifications ayant été apportées depuis leur mise en
          ligne. Par ailleurs, toutes les informations indiquées sur le site
          www.maison-essenza.com sont données à titre indicatif, et sont
          susceptibles de changer ou d&apos;évoluer sans préavis.
        </p>
      </section>

      <section>
        <h2>Limitation contractuelles sur les données</h2>
        <p>
          Les informations contenues sur ce site sont aussi précises que
          possibles et le site remis à jour à différentes périodes de
          l&apos;année, mais peut toutefois contenir des inexactitudes ou des
          omissions. Si vous constatez une lacune, erreur ou ce qui paraît être
          un dysfonctionnement, merci de bien vouloir le signaler par email, à
          l&apos;adresse{" "}
          <a href="mailto:hello@maison-essenza.com">hello@maison-essenza.com</a>
          , en décrivant le problème de la manière la plus précise possible
          (page posant problème, type d&apos;ordinateur et de navigateur
          utilisé, etc.).
        </p>
        <p>
          Tout contenu téléchargé se fait aux risques et périls de
          l&apos;utilisateur et sous sa seule responsabilité. En conséquence,
          nous ne saurions être tenus responsables d&apos;un quelconque dommage
          subi par l&apos;ordinateur de l&apos;utilisateur ou d&apos;une
          quelconque perte de données consécutives au téléchargement. De plus,
          l&apos;utilisateur du site s&apos;engage à accéder au site en
          utilisant un matériel récent, ne contenant pas de virus et avec un
          navigateur de dernière génération mis à jour. Les liens hypertextes
          mis en place dans le cadre du présent site internet en direction
          d&apos;autres ressources présentes sur le réseau Internet ne sauraient
          engager la responsabilité de Loft75.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Tout le contenu du présent site www.maison-essenza.com, incluant, de
          façon non limitative, les graphismes, images, textes, vidéos,
          animations, sons, logos, gifs et icônes ainsi que leur mise en forme
          sont la propriété exclusive de la société à l&apos;exception des
          marques, logos ou contenus appartenant à d&apos;autres sociétés
          partenaires ou auteurs.
        </p>
      </section>

      <section>
        <h2>Déclaration à la CNIL</h2>
        <p>
          Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi
          2004-801 du 6 août 2004 relative à la protection des personnes
          physiques à l&apos;égard des traitements de données à caractère
          personnel) relative à l&apos;informatique, aux fichiers et aux
          libertés, les informations recueillies sur nos formulaires sont
          enregistrées dans un fichier informatisé par Maison Essenza pour la
          gestion commerciale ou la gestion du service recrutement.
        </p>
        <p>
          Elles sont conservées pendant 3 ans et sont destinées soit au service
          commercial, soit au service recrutement. Conformément à la loi «
          informatique et libertés », vous pouvez exercer votre droit
          d&apos;accès aux données vous concernant et les faire rectifier en
          contactant notre DPO : Dominique Roussel par email{" "}
          <a href="mailto:dpo@coming-web.com">dpo@coming-web.com</a>.
        </p>
        <p>
          Nous vous informons de l&apos;existence de la liste d&apos;opposition
          au démarchage téléphonique « Bloctel », sur laquelle vous pouvez vous
          inscrire ici :{" "}
          <a
            href="https://conso.bloctel.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://conso.bloctel.fr/
          </a>
        </p>
      </section>

      <section>
        <h2>Litiges</h2>
        <p>
          Les présentes conditions du site www.loft75.com sont régies par les
          lois françaises et toute contestation ou litiges qui pourraient naître
          de l&apos;interprétation ou de l&apos;exécution de celles-ci seront de
          la compétence exclusive des tribunaux dont dépend le siège social de
          la société. La langue de référence, pour le règlement de contentieux
          éventuels, est le français.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          De manière générale, vous n&apos;êtes pas tenu de nous communiquer vos
          données personnelles lorsque vous visitez notre site Internet{" "}
          <a
            href="https://www.maison-essenza.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.maison-essenza.com
          </a>
          . Cependant, ce principe comporte certaines exceptions.
        </p>
        <p>
          En effet, pour certains services proposés par notre site, vous pouvez
          être amené à nous communiquer certaines données telles que : votre
          nom, votre fonction, le nom de votre société, votre adresse
          électronique, et votre numéro de téléphone. Tel est le cas lorsque
          vous remplissez le formulaire qui vous est proposé en ligne, dans la
          rubrique « contact ». Dans tous les cas, vous pouvez refuser de
          fournir vos données personnelles.
        </p>
        <p>
          Dans ce cas, vous ne pourrez pas utiliser les services du site,
          notamment celui de solliciter des renseignements sur notre société, ou
          de recevoir les lettres d&apos;information. Enfin, nous pouvons
          collecter de manière automatique certaines informations vous
          concernant lors d&apos;une simple navigation sur notre site Internet,
          notamment : des informations concernant l&apos;utilisation de notre
          site, comme les zones que vous visitez et les services auxquels vous
          accédez, votre adresse IP, le type de votre navigateur, vos temps
          d&apos;accès.
        </p>
        <p>
          De telles informations sont utilisées exclusivement à des fins de
          statistiques internes, de manière à améliorer la qualité des services
          qui vous sont proposés. Les bases de données sont protégées par les
          dispositions de la loi du 1er juillet 1998 transposant la directive
          96/9 du 11 mars 1996 relative à la protection juridique des bases de
          données.
        </p>
      </section>
    </div>
  );
};

export default Mentions;
