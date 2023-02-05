import React from 'react'
import styles from "../styles/Slider.module.css"
const Slider = () => {
  return (
    <div>
        <div className={styles.options}>
   <div className={`${styles.option} ${styles.active}`} style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);">
      <div className={styles.shadow}></div>
      <div className={styles.label}>
         <div className={styles.icon}>
            <i className={`${styles.fas} ${styles.faWalking}`}></i>
         </div>
         <div className={styles.info}>
            <div className={styles.main}>Blonkisoaz</div>
            <div className={styles.sub}>Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div className={styles.option} style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);">
      <div className={styles.shadow}></div>
      <div className={styles.label}>
         <div className={styles.icon}>
            <i className={`${styles.fas} ${styles.faSnowflake}`}></i>
         </div>
         <div className={styles.info}>
            <div className={styles.main}>Oretemauw</div>
            <div className={styles.sub}>Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div className={styles.option} style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);">
      <div className={styles.shadow}></div>
      <div className={styles.label}>
         <div className={styles.icon}>
            <i className={`${styles.fas} ${styles.faTree}`}></i>
         </div>
         <div className={styles.info}>
            <div className={styles.main}>Iteresuselle</div>
            <div className={styles.sub}>Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div className={styles.option} style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);">
      <div className={styles.shadow}></div>
      <div className={styles.label}>
         <div className={styles.icon}>
            <i className={`${styles.fas} ${styles.faTint}`}></i>
         </div>
         <div className={styles.info}>
            <div className={styles.main}>Idiefe</div>
            <div className={styles.sub}>Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
   <div className={styles.option} style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);">
      <div className={styles.shadow}></div>
      <div className={styles.label}>
         <div className={styles.icon}>
            <i className={`${styles.fas} ${styles.faSun}`}></i>
         </div>
         <div className={styles.info}>
            <div className={styles.main}>Inatethi</div>
            <div className={styles.sub}>Omuke trughte a otufta</div>
         </div>
      </div>
   </div>
</div>

<a href="http://victorofvalencia-blog.tumblr.com" target="_blank" className={styles.credit}>Photos from Victor of Valencia on tumblr</a>
    </div>
  )
}

export default Slider