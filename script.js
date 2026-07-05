 class LearningWebsite 
    {
  constructor() {
    this.timerId = null;
    this.contentData = null;
    this.init();
  }

  /* async used since we stored data in json */

  //here only try,catch and const response,this.contentData lines is added other remain same

 async init() {
    try
    {
        const response=await fetch('data.json');
        this.contentData=await response.json();

    const buttons = document.querySelectorAll(".content-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-content");
        this.startLearning(type);
      });
    });
}
  catch(error)
  {
     console.error("Error");
  }
  }


  startLearning(type) {
    this.stopAutoPlay();
    const data = this.contentData[type];
    const container = document.getElementById("contentContainer");
    // 1. Creating elements before the loop
    container.innerHTML = ""; 
    
    const wrapper = document.createElement("div");
    const wrapper1 = document.createElement("div");
    const wrapper2 = document.createElement("div");  //for stop,ford,prev button
    wrapper1.className= "disp";
    wrapper.className = "display-card";
    wrapper2.className="btn";

    const label = document.createElement("h1");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const text = document.createElement("p");
    const stopBtn = document.createElement("button");
    //prev forward button
    const prevBtn=document.createElement("button");
    const nextBtn=document.createElement("button");

   
  
    //img1.id="img1";

    img1.className="learn-img";
    img2.className="learn-img";
    text.className="learn-text";
    stopBtn.className="stop-btn";
    prevBtn.className="stop-btn";
    nextBtn.className="stop-btn";


    stopBtn.textContent = "Stop ❌";
    stopBtn.onclick = () => this.stopAutoPlay();
    prevBtn.textContent = "Previous ⏮";
    nextBtn.textContent="Foward ⏩";

  
    // Append them to the DOM
    wrapper1.append(img1,img2);
    container.appendChild(wrapper1);
    wrapper2.append(stopBtn,prevBtn,nextBtn);
    wrapper.append(label,text,wrapper2);
    container.appendChild(wrapper);



    let index = 0;

    // 2. The Loop (Only updates data)
    const update = () => {
      const item = data[index];
      
      // Assign data to the existing elements
      label.textContent = item.label;
      img1.src = item.img1;
      img2.src = item.img2;
      text.textContent = item.text;
      
      this.playAudio(item.audio);

      // index++ logic
      index = (index + 1) % data.length;

      let nextDelay=6000;      // for other content time duration is 6 sec  nextDelay stores time
      if(item.audio.includes("rhymes")||type==="rhymes")   // for rhymes longer time duration 
      {
         nextDelay=20000;  
      }

         this.timerId = setTimeout(update,nextDelay); // Set interval

    };

    prevBtn.onclick=() =>{

      /*
      for previous index-2 kiye h because current index already slide 2 ke liye 3 hogaya h and if mere ko previous slide ke liye -2 karege(slide2 current and prev slide1 h) so slide1 me aayege
      data.length taki negative me na ho eg data length=5,current slide suppose 3 h so index tera 4 hoga 
      now back step=(4-2=2).2+5(data.length)=7(for safety positive no milega).phir 7%5(data.length)=2.so it goes 2 step previous ie actual slide 2
    */
      clearTimeout(this.timerId);
      index=(index-2+data.length)%data.length;     
      update();           
    
    }
   
    nextBtn.onclick=() =>{
      clearTimeout(this.timerId);
      update();
    }
   

    update(); // Run first time

   }

  playAudio(file) {
    //if anything is playing it stop it
    if(this.currentAudio)
    {
      this.currentAudio.pause();
      this.currentAudio.currentAudio=0;
    }

    const audio = new Audio(file);
    this.currentAudio=audio;
    audio.play().catch(e => console.log("Audio waiting for user interaction..."));

  }

     stopAutoPlay() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

     if(this.currentAudio)
    {
      this.currentAudio.pause();  //stop the current playing
      this.currentAudio=null;
    }
   

    document.getElementById("contentContainer").innerHTML = "";
  }

}

new LearningWebsite();
