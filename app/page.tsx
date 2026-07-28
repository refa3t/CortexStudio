"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";

const projects = [
  {n:"01",name:"BellaCity",long:"Factory ERP",kind:"INDUSTRIAL SYSTEM",sector:"Industry",color:"#efece4",mark:"BC",image:"/projects/bellacity-logo-hd.webp",copy:"One operational brain for three plastics factories.",detail:"Production · Machines · Materials · Maintenance · HR",stack:"FLUTTER / NODE.JS / POSTGRESQL",status:"IN PRODUCTION"},
  {n:"02",name:"QuickServe",long:"Ordering Website & Restaurant Cashier",kind:"CUSTOMER ORDERING WEBSITE + RESTAURANT POS",sector:"Hospitality",color:"#ff5b31",mark:"QS",image:"/projects/quickserve-brand-v2.webp",copy:"A customer ordering website connected directly to the restaurant cashier, kitchen and delivery workflow—currently powering Qasr El Sham.",detail:"Customer ordering website · Restaurant cashier POS · Kitchen printing · Delivery · Analytics · Offline operation",stack:"FLUTTER / TYPESCRIPT / SOCKET.IO",status:"LIVE AT QASR EL SHAM"},
  {n:"03",name:"MarketPOS",long:"Super Cachir",kind:"SUPERMARKET POS",sector:"Retail",color:"#d8ff36",mark:"MP",image:"/projects/marketpos-brand-v2.webp",copy:"From barcode to shelf intelligence in seconds.",detail:"Weight barcodes · FEFO · Dual stock · Thermal print",stack:"FLUTTER / DRIFT / ESC-POS",status:"LAUNCHING"},
  {n:"04",name:"PharmaPOS",long:"Pharmacy OS",kind:"HEALTHCARE POS",sector:"Healthcare",color:"#55e7ac",mark:"PP",image:"/projects/pharmapos-brand-v2.webp",copy:"Expiry-aware pharmacy operations made beautifully simple.",detail:"Prescriptions · Suppliers · FIFO · Backups",stack:"FLUTTER / SQLITE / WIN32",status:"COMPLETED"},
  {n:"05",name:"Sports Print",long:"Cashier & Website",kind:"POS SYSTEM + E-COMMERCE WEBSITE",sector:"Retail",color:"#f3a8ff",mark:"SP",image:"/projects/sports-print-brand.webp",copy:"A connected cashier system and online store for customized sportswear—from customer design to printing and delivery.",detail:"Cashier POS · E-commerce website · Product customization · Print queue · Unified inventory",stack:"FLUTTER WEB / NESTJS / RBAC",status:"IN DEVELOPMENT"},
  {n:"06",name:"RestoPOS",long:"Offline Cashier",kind:"RESTAURANT POS",sector:"Hospitality",color:"#ff9d2e",mark:"RP",image:"/projects/restopos-brand-v2.webp",copy:"A focused cashier that needs no cloud to move fast.",detail:"Dine-in · Takeaway · Delivery · PDF receipts",stack:"FLUTTER / WINDOWS / OFFLINE",status:"COMPLETED"},
  {n:"07",name:"Coffee & Restaurant",long:"System",kind:"COFFEE & RESTAURANT SYSTEM",sector:"Hospitality",color:"#f2d6a2",mark:"CRS",image:"/projects/coffee-restaurant-system-brand.webp",copy:"Tables, reservations and orders without the clutter.",detail:"Tables · Reservations · Staff · Expenses",stack:"FLUTTER / RIVERPOD / DRIFT",status:"COMPLETED"},
  {n:"08",name:"Suit Rental",long:"Rental Manager",kind:"SPECIALIZED OPERATIONS",sector:"Services",color:"#7cc4ff",mark:"SR",image:"/projects/suit-rental-brand.webp",copy:"Every suit, booking and payment in its right place.",detail:"Bookings · Returns · Penalties · Reports",stack:"FLUTTER / ANDROID / WINDOWS",status:"COMPLETED"},
  {n:"09",name:"Overnice",long:"Travel",kind:"HOTEL DISCOVERY",sector:"Web",color:"#5be1ff",mark:"OT",image:"/projects/overnice-brand.webp",copy:"Hotel discovery built for the Arabic traveler.",detail:"Search · Compare · Seasonal prices · Reviews",stack:"JAVASCRIPT / NETLIFY / VITEST",status:"LIVE",url:"https://overnicestore.netlify.app"},
  {n:"10",name:"Digital Menu",long:"Balcona",kind:"QR MENU + CMS",sector:"Web",color:"#ff7ca7",mark:"DM",image:"/projects/digital-menu-brand.webp",copy:"The menu changes before the customer refreshes.",detail:"Categories · Products · Identity · Live updates",stack:"HTML / CSS / JAVASCRIPT",status:"LIVE",url:"https://menu142.netlify.app"},
  {n:"11",name:"Invitations",long:"Digital Events",kind:"INTERACTIVE WEB",sector:"Web",color:"#e35a64",mark:"IV",image:"/projects/invitations-brand-v2.webp",copy:"An invitation that feels like opening a memory.",detail:"Envelope · Music · Maps · Countdown · Bilingual",stack:"HTML / CSS / MOTION",status:"LIVE"},
];
const filters=["All","Hospitality","Retail","Industry","Healthcare","Services","Web"];

const BASE_PATH=process.env.NEXT_PUBLIC_BASE_PATH??"";

function ProductArt({p}:{p:(typeof projects)[number]}){
  const useLayers=Boolean(p.image);
  const assemblyVariant=(Number(p.n)-1)%6;
  const layerNames=["core","north","west","east","south","spark"];
  const imageUrl=p.image?`${BASE_PATH}${p.image}`:"";
  return <div className="product-art" style={{"--accent":p.color} as React.CSSProperties}>
    <span className="art-grid"/><b className="art-mark">{p.mark}</b>
    {useLayers?<div className={`art-composite assembly-${assemblyVariant} ${p.name==="BellaCity"?"bella-composite":""}`} role="img" aria-label={`${p.name} project artwork`}>
      <i className="art-composite-base" style={{backgroundImage:`url("${imageUrl}")`}}/>
      {layerNames.map(name=><i className={`art-layer layer-${name}`} key={name} style={{backgroundImage:`url("${imageUrl}")`}}/>)}
    </div>:p.image?<Image src={p.image} alt={`${p.name} original product artwork`} fill sizes="(max-width:800px) 90vw, 50vw" className="art-image"/>:
    <div className="art-screen"><div className="screen-nav"><i/><i/><i/></div><div className="screen-body"><aside><b>{p.mark}</b><i/><i/><i/><i/></aside><section><div className="screen-title"/><div className="screen-stats"><i/><i/><i/></div><div className="screen-graph">{[35,62,47,88,53,74,42,92,66,80].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></section></div></div>}
    <span className="art-status">{p.status}</span><span className="art-number">{p.n}</span>
  </div>
}

export default function Home(){
  const [filter,setFilter]=useState("All");
  const [menu,setMenu]=useState(false);
  const blob=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if("scrollRestoration" in history) history.scrollRestoration="manual";
    scrollTo(0,0);
    const lenis=new Lenis({duration:1.65,wheelMultiplier:.72,touchMultiplier:1.05});let raf=0;const loop=(t:number)=>{lenis.raf(t);raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop);
    lenis.on("scroll",({progress,velocity,direction}:{progress:number;velocity:number;direction:number})=>{
      document.documentElement.style.setProperty("--scroll-progress",`${progress}`);
      document.documentElement.style.setProperty("--scroll-velocity",`${Math.max(-12,Math.min(12,velocity))}`);
      const directionLabel=document.querySelector<HTMLElement>(".scroll-direction b");
      if(directionLabel) directionLabel.textContent=direction>0?"DESCENDING":"ASCENDING";
    });
    let clean=()=>{};Promise.all([import("gsap"),import("gsap/ScrollTrigger")]).then(([g,s])=>{const gsap=g.default;gsap.registerPlugin(s.ScrollTrigger);
      const intro=gsap.timeline();
      intro.to(".loader-count",{textContent:100,duration:1.15,snap:{textContent:1},ease:"power2.inOut"})
        .to(".loader-slice",{scaleY:0,duration:.8,stagger:{amount:.24,from:"random"},ease:"power4.inOut"})
        .to(".loader",{autoAlpha:0,duration:.1})
        .from(".hero-line i",{yPercent:110,rotate:5,duration:1.25,stagger:.08,ease:"power4.out"},"-=.25")
        .from(".nav-inner>*",{opacity:0,y:-18,duration:.7,stagger:.06},"-=.8")
        .from(".hero-orbit",{scale:0,rotate:-120,opacity:0,duration:1,ease:"elastic.out(1,.5)"},"-=.65");
      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach(el=>gsap.fromTo(el,{y:100,opacity:0},{y:0,opacity:1,ease:"none",scrollTrigger:{trigger:el,start:"top 96%",end:"top 62%",scrub:.8}}));
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((el,i)=>{
        const stage=el.querySelector<HTMLElement>(".card-stage");
        if(!stage)return;
        const motion=i%4;
        const starts=[
          {xPercent:-14,yPercent:8,scale:.96,opacity:.35},
          {xPercent:14,yPercent:6,scale:.96,opacity:.35},
          {yPercent:14,scale:.94,opacity:.3},
          {yPercent:-10,scale:.96,opacity:.35}
        ];
        gsap.fromTo(stage,starts[motion],{xPercent:0,yPercent:0,scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:el,start:"top 96%",end:"top 62%",scrub:1.8}});
        s.ScrollTrigger.create({trigger:el,start:"top 55%",end:"bottom 45%",onEnter:()=>activateProject(i,1),onEnterBack:()=>activateProject(i,-1)});
        const copy=el.querySelector<HTMLElement>(".work-copy");
        const title=el.querySelector<HTMLElement>(".work-copy h3");
        const meta=el.querySelectorAll<HTMLElement>(".work-top span,.work-detail,.work-stack");
        if(copy&&title){
          const direction=i%2?1:-1;
          const copyScene=gsap.timeline({scrollTrigger:{trigger:el,start:"top 84%",end:"top 38%",scrub:1.8}});
          copyScene.fromTo(title,{xPercent:direction*12,yPercent:16,opacity:.3},{xPercent:0,yPercent:0,opacity:1,duration:.55})
            .fromTo(meta,{x:(j:number)=>direction*(j%2?32:-32),opacity:.35},{x:0,opacity:1,stagger:{amount:.14,from:"random"},duration:.45},"<.08");
        }
      });
      const activateProject=(index:number,direction:number)=>{
        const ghost=document.querySelector<HTMLElement>(".project-ghost");
        if(!ghost)return;
        ghost.textContent=projects[index]?.mark||"CS";
        ghost.style.color=projects[index]?.color||"#2555f6";
        gsap.fromTo(ghost,{scale:.4,rotate:direction*18,filter:"blur(16px)",opacity:0},{scale:1,rotate:0,filter:"blur(0px)",opacity:.13,duration:.65,ease:"back.out(1.8)",overwrite:true});
      };
      gsap.utils.toArray<HTMLElement>(".product-art").forEach((el,i)=>{
        const image=el.querySelector(".art-image");
        if(image) gsap.fromTo(image,{yPercent:-7,rotate:i%2?-2:2},{yPercent:7,rotate:i%2?2:-2,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:1.2}});
        const layers=el.querySelectorAll(".art-layer");
        const base=el.querySelector(".art-composite-base");
        if(layers.length&&base){
          const variant=i%6;
          const pathSets=[
            [[0,-180],[-120,-360],[-440,20],[440,20],[0,360],[220,-250]],
            [[0,-380],[330,-170],[360,230],[0,420],[-360,230],[-330,-170]],
            [[-80,-430],[90,-330],[-100,-250],[100,330],[-80,430],[80,250]],
            [[480,-160],[560,-70],[640,10],[720,90],[800,170],[880,250]],
            [[0,-520],[-450,-340],[-560,80],[560,80],[-400,430],[420,420]],
            [[0,0],[-90,-60],[-120,20],[120,20],[-80,100],[100,-90]]
          ];
          const paths=pathSets[variant];
          const startScales=[.28,.55,.7,.82,1.75,2.8];
          const assembly=gsap.timeline({scrollTrigger:{trigger:el,start:"top 98%",end:"top 30%",scrub:1.1}});
          assembly.fromTo(layers,{
            x:(layerIndex:number)=>paths[layerIndex][0]*(i%2?-1:1),
            y:(layerIndex:number)=>paths[layerIndex][1],
            rotate:(layerIndex:number)=>variant===1?(layerIndex+1)*65:variant===3?-18+layerIndex*3:(layerIndex-2.5)*(variant===4?22:9),
            rotateX:variant===5?70:0,
            rotateY:variant===5?(i%2?110:-110):0,
            skewX:variant===2?(i%2?18:-18):0,
            scale:startScales[variant],
            opacity:0,
            filter:"none"
          },{
            x:0,y:0,rotate:0,rotateX:0,rotateY:0,skewX:0,scale:1,opacity:1,filter:"none",
            stagger:{amount:variant===3?.42:.24,from:variant===0?"start":variant===1?"edges":variant===2?"end":"random"},
            duration:.78,ease:"none"
          }).fromTo(base,{opacity:.16,scale:variant===4?.9:1.04},{opacity:1,scale:1,duration:.4,ease:"none"},variant===2?"-=.3":"-=.12");
        }
      });
      gsap.to(".hero-line:first-child",{xPercent:-12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
      gsap.to(".hero-line:nth-child(2)",{xPercent:12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
      gsap.to(".hero-line.accent",{scale:.76,letterSpacing:"-.02em",ease:"none",scrollTrigger:{trigger:".hero",start:"35% top",end:"bottom top",scrub:1}});
      gsap.to(".hero-orbit",{rotate:360,scale:1.5,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
      gsap.to(".running-type",{xPercent:-45,ease:"none",scrollTrigger:{trigger:".ticker",start:"top bottom",end:"bottom top",scrub:1}});
      gsap.fromTo(".ticker",{rotate:-4,scale:1.12},{rotate:3,scale:1.02,ease:"none",scrollTrigger:{trigger:".ticker",start:"top bottom",end:"bottom top",scrub:1}});
      gsap.to(".studio-disc",{rotate:250,ease:"none",scrollTrigger:{trigger:".studio",start:"top bottom",end:"bottom top",scrub:1}});
      gsap.fromTo(".capabilities",{clipPath:"polygon(0 8%,100% 0,100% 92%,0 100%)"},{clipPath:"polygon(0 0,100% 0,100% 100%,0 100%)",ease:"none",scrollTrigger:{trigger:".capabilities",start:"top bottom",end:"top 30%",scrub:1}});
      gsap.utils.toArray<HTMLElement>(".cap-list article").forEach((row,i)=>gsap.fromTo(row,{xPercent:i%2?-28:28,rotate:i%2?-2:2,opacity:.2},{xPercent:0,rotate:0,opacity:1,ease:"none",scrollTrigger:{trigger:row,start:"top 95%",end:"top 55%",scrub:.8}}));
      gsap.to("footer h2",{backgroundPositionX:"0%",ease:"none",scrollTrigger:{trigger:"footer",start:"top bottom",end:"bottom bottom",scrub:1}});
      gsap.fromTo("footer h2",{scale:.58,rotate:-4},{scale:1,rotate:0,ease:"none",scrollTrigger:{trigger:"footer",start:"top bottom",end:"top 15%",scrub:1}});
      gsap.fromTo(".footer-actions a",{yPercent:120,rotate:(i:number)=>i?-4:4},{yPercent:0,rotate:0,ease:"none",stagger:.12,scrollTrigger:{trigger:".footer-actions",start:"top bottom",end:"top 65%",scrub:1}});
      const scenes=gsap.matchMedia();
      scenes.add("(min-width: 851px)",()=>{
        gsap.utils.toArray<HTMLElement>(".chaos-object").forEach((object,i)=>{
          const routes=[
            {x:[-28,72,-44,18],y:[8,-22,34,-8],r:[-12,18,-8,4]},
            {x:[32,-68,46,-16],y:[-14,28,-18,12],r:[10,-22,14,-5]},
            {x:[-55,38,66,-24],y:[30,-16,8,-26],r:[-18,8,26,-10]},
            {x:[62,-30,-72,26],y:[-28,18,36,-12],r:[22,-6,-20,8]}
          ][i%4];
          gsap.timeline({scrollTrigger:{trigger:".statement",start:"top 75%",endTrigger:".studio",end:"bottom 25%",scrub:2.8}})
            .set(object,{autoAlpha:1})
            .to(object,{xPercent:routes.x[0],yPercent:routes.y[0],rotate:routes.r[0],duration:.18})
            .to(object,{xPercent:routes.x[1],yPercent:routes.y[1],rotate:routes.r[1],duration:.28})
            .to(object,{xPercent:routes.x[2],yPercent:routes.y[2],rotate:routes.r[2],duration:.26})
            .to(object,{xPercent:routes.x[3],yPercent:routes.y[3],rotate:routes.r[3],duration:.28});
        });
        const statementScene=gsap.timeline({scrollTrigger:{trigger:".statement",start:"top top",end:"+=190%",pin:true,scrub:2.1,anticipatePin:1,refreshPriority:3}});
        statementScene.fromTo(".statement-grid h2",{xPercent:-35,opacity:.15},{xPercent:0,opacity:1,duration:1})
          .fromTo(".statement-grid p",{xPercent:35,opacity:.15},{xPercent:0,opacity:1,duration:1},"<")
          .to(".statement-grid h2",{xPercent:24,yPercent:20,rotate:1.4,scale:.82,duration:.8})
          .to(".statement-grid p",{xPercent:-27,yPercent:-17,rotate:-1.2,scale:.86,duration:.8},"<")
          .to(".statement-grid",{yPercent:-55,opacity:0,duration:1})
          .fromTo(".statement-punch span",{xPercent:-120,yPercent:80,rotate:-12},{xPercent:0,yPercent:0,rotate:0,duration:1},"<.25")
          .fromTo(".statement-punch b",{xPercent:180,yPercent:-120,scale:0,rotate:-95},{xPercent:0,yPercent:0,scale:1,rotate:0,duration:1},"<")
          .fromTo(".statement-punch em",{xPercent:120,yPercent:90,rotate:16},{xPercent:0,yPercent:0,rotate:0,duration:1},"<")
          .to(".statement-punch span",{xPercent:112,yPercent:-12,duration:.55})
          .to(".statement-punch em",{xPercent:-105,yPercent:18,duration:.55},"<")
          .to(".statement-punch b",{yPercent:20,rotate:4,scale:1.12,duration:.65},"<");
        const studioScene=gsap.timeline({scrollTrigger:{trigger:".studio",start:"top top",end:"+=150%",pin:true,scrub:2.2,anticipatePin:1,refreshPriority:2}});
        studioScene.fromTo(".studio-disc",{scale:.45,xPercent:-35},{scale:1,xPercent:0,duration:1})
          .fromTo(".studio-copy",{xPercent:45,opacity:0},{xPercent:0,opacity:1,duration:1},"<")
          .fromTo(".facts span",{y:60,opacity:0},{y:0,opacity:1,stagger:.16,duration:.7})
          .to(".studio-disc",{xPercent:105,scale:.82,rotate:"+=55",duration:.9},"<")
          .to(".studio-copy",{xPercent:-62,yPercent:5,rotate:-.8,duration:.9},"<")
          .to(".studio-disc",{xPercent:0,yPercent:-5,scale:1.08,rotate:"+=65",duration:.85})
          .to(".studio-copy",{xPercent:0,yPercent:0,rotate:0,duration:.7},"<");
      });
      const refreshMotion=()=>{s.ScrollTrigger.sort();s.ScrollTrigger.refresh()};
      const refreshProjects=()=>requestAnimationFrame(()=>requestAnimationFrame(refreshMotion));
      requestAnimationFrame(()=>requestAnimationFrame(refreshMotion));
      document.fonts?.ready.then(refreshMotion);
      addEventListener("load",refreshMotion,{once:true});
      addEventListener("projects-filtered",refreshProjects);
      clean=()=>{removeEventListener("load",refreshMotion);removeEventListener("projects-filtered",refreshProjects);scenes.revert();s.ScrollTrigger.getAll().forEach(x=>x.kill())};
    });
    const move=(e:PointerEvent)=>blob.current?.animate({transform:`translate(${e.clientX-180}px,${e.clientY-180}px)`},{duration:900,fill:"forwards"});
    const tilt=(e:PointerEvent)=>{
      const art=(e.target as HTMLElement).closest<HTMLElement>(".product-art");if(!art)return;
      const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      art.style.setProperty("--rx",`${-y*7}deg`);art.style.setProperty("--ry",`${x*9}deg`);
    };
    const untilt=(e:PointerEvent)=>{const art=(e.target as HTMLElement).closest<HTMLElement>(".product-art");if(art){art.style.setProperty("--rx","0deg");art.style.setProperty("--ry","0deg")}};
    const magnetic=(e:PointerEvent)=>{const el=(e.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");if(!el)return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.18}px)`};
    const unmagnetic=(e:PointerEvent)=>{const el=(e.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");if(el)el.style.transform=""};
    addEventListener("pointermove",move);addEventListener("pointermove",tilt);addEventListener("pointerout",untilt);addEventListener("pointermove",magnetic);addEventListener("pointerout",unmagnetic);
    return()=>{cancelAnimationFrame(raf);lenis.destroy();clean();removeEventListener("pointermove",move);removeEventListener("pointermove",tilt);removeEventListener("pointerout",untilt);removeEventListener("pointermove",magnetic);removeEventListener("pointerout",unmagnetic)};
  },[]);
  useEffect(()=>{const id=setTimeout(()=>dispatchEvent(new Event("projects-filtered")),80);return()=>clearTimeout(id)},[filter]);
  return <main>
    <div className="loader" aria-hidden="true">{[0,1,2,3,4,5].map(x=><i className="loader-slice" key={x}/>)}<div><b className="loader-count">0</b><span>LOADING THE MESS</span></div></div>
    <div className="scroll-progress"/><div className="scroll-direction" aria-hidden="true"><i/><b>DESCENDING</b></div><div className="cursor-blob" ref={blob}/><div className="paper-noise"/>
    <div className="chaos-field" aria-hidden="true"><i className="chaos-object chaos-pill">BUILD / BREAK / REPEAT</i><i className="chaos-object chaos-square">↗</i><i className="chaos-object chaos-ring"/><i className="chaos-object chaos-code">{"{ 11 PRODUCTS }"}</i></div>
    <nav><div className="nav-inner"><a className="wordmark" href="#top"><b>CORTEX</b><i>STUDIO®</i></a><div className={`nav-links ${menu?"open":""}`}><a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#studio">Studio</a></div><a className="talk" data-magnetic href="#contact">Let&apos;s talk <b>↗</b></a><button onClick={()=>setMenu(!menu)}>{menu?"Close":"Menu"}</button></div></nav>

    <header className="hero" id="top">
      <div className="hero-orbit" aria-hidden="true"><i>PRODUCT</i><i>DESIGN</i><i>CODE</i><i>CHAOS</i></div>
      <div className="hero-meta"><span>INDEPENDENT SOFTWARE STUDIO</span><span>BENHA, EGYPT — EST. 2024</span></div>
      <h1><span className="hero-line"><i>SOFTWARE</i></span><span className="hero-line"><i>FOR THE</i></span><span className="hero-line accent"><i>MESSY MIDDLE.</i></span></h1>
      <div className="hero-bottom"><p>We design operational software for the places where spreadsheets, people and pressure collide.</p><a href="#work">Selected work <span>↓</span></a><div className="hero-seal"><b>C</b><span>CORTEX STUDIO · SYSTEMS THAT THINK · </span></div></div>
    </header>

    <section className="statement">
      <span className="eyebrow" data-rise>01 / POINT OF VIEW</span>
      <div className="statement-grid"><h2>Pretty screens are easy.</h2><p>The hard part is understanding a shift, a kitchen, a warehouse, a pharmacy or a factory well enough to make software disappear into the work.</p></div>
      <div className="statement-punch"><span>THAT&apos;S</span><b>OUR</b><em>WORK.</em></div>
    </section>

    <section className="ticker" aria-hidden="true"><div className="running-type">OFFLINE FIRST / ARABIC NATIVE / OPERATIONAL BY DESIGN / OFFLINE FIRST / ARABIC NATIVE / OPERATIONAL BY DESIGN /</div></section>

    <section className="work" id="work">
      <div className="work-heading" data-rise><span className="eyebrow">02 / SELECTED WORK</span><h2>Eleven products.<br/>Zero filler.</h2><p>Every project below exists. Every domain had its own rules. Every system was shaped around them.</p></div>
      <div className="filters">{filters.map(f=><button data-magnetic className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}<sup>{f==="All"?projects.length:projects.filter(p=>p.sector===f).length}</sup></button>)}</div>
      <div className="project-ghost" aria-hidden="true">CS</div>
      <div className="work-list">{projects.map((p,i)=><article className={`work-card ${i%2?"reverse":""} motion-${i%4} ${filter!=="All"&&p.sector!==filter?"filtered-out":""}`} key={p.name} style={{"--accent":p.color} as React.CSSProperties}>
        <div className="card-stage"><span className="project-index" aria-hidden="true">{p.n}</span><ProductArt p={p}/><div className="work-copy"><div className="work-top"><span>{p.n} / {p.kind}</span><span>{p.status}</span></div><h3>{p.name}<small>{p.long}</small></h3><p>{p.copy}</p><div className="work-detail">{p.detail}</div><div className="work-stack">{p.stack}</div>{p.url&&<a href={p.url} target="_blank" rel="noreferrer">Visit live project ↗</a>}</div><span className="project-corner" aria-hidden="true">CORTEX / CASE STUDY ↗</span></div>
      </article>)}</div>
    </section>

    <section className="capabilities" id="capabilities">
      <span className="eyebrow" data-rise>03 / WHAT WE DO</span><h2 data-rise>We take the<br/><em>whole system</em><br/>personally.</h2>
      <div className="cap-list">
        {[["01","Product thinking","We map the operation, the people and the exceptions before choosing the architecture."],["02","Interface design","Arabic-first interfaces that feel immediate on desktop, web and mobile."],["03","Full-stack engineering","Flutter, TypeScript, Node.js, PostgreSQL, local databases and realtime infrastructure."],["04","Deployment & support","Installers, thermal printers, local networks, cloud deployment and the unglamorous details that make products real."]].map(x=><article data-rise key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p><i>↗</i></article>)}
      </div>
    </section>

    <section className="studio" id="studio">
      <div className="studio-disc"><span>CORTEX STUDIO / BUILT IN EGYPT / </span><b>C</b></div>
      <div className="studio-copy"><span className="eyebrow">04 / THE STUDIO</span><h2>Small by design.<br/>Serious by default.</h2><p>Cortex Studio was founded by Mohamed Elrefaey—Flutter developer, systems engineer and the person who would rather spend a day on the factory floor than guess what a dashboard should say.</p><div className="facts"><span><b>11</b> PRODUCTS</span><span><b>03</b> PLATFORMS</span><span><b>01</b> STANDARD</span></div></div>
    </section>

    <footer id="contact">
      <div className="footer-top"><span className="eyebrow">05 / START SOMETHING</span><span>AVAILABLE FOR SELECT PROJECTS — 2026</span></div>
      <h2 data-rise>MAKE THE<br/><i>MESS</i> MAKE SENSE.</h2>
      <div className="footer-actions"><a data-magnetic href="mailto:Mohamedahmed1422001@gmail.com?subject=Cortex Studio — Project inquiry">Mohamedahmed1422001@gmail.com <b>↗</b></a><a data-magnetic href="https://wa.me/201100508108" target="_blank" rel="noreferrer">WhatsApp <b>↗</b></a></div>
      <div className="footer-bottom"><a className="wordmark" href="#top"><b>CORTEX</b><i>STUDIO®</i></a><span>BENHA / EGYPT</span><a href="https://linkedin.com/in/mohamed-elrefaey-07b41b204" target="_blank" rel="noreferrer">LINKEDIN ↗</a><span>© 2026</span></div>
    </footer>
  </main>
}


