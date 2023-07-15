import Ari from "./Ari";
import KDA from "./KDA";
import Summer from "./Summer";

const KDAAri = new Ari(new KDA("KDA"));

KDAAri.move();
KDAAri.skillQ();
KDAAri.skillW();
KDAAri.skillE();
KDAAri.skillR();

const summerAri = new Ari(new Summer("Summer"));

summerAri.move();
summerAri.skillQ();
summerAri.skillW();
summerAri.skillE();
summerAri.skillR();
