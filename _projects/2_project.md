---
layout: page
title: Person agreement across the preterite and present perfect tenses in Spanish heritage speakers
description: Image credit-Baselang
img: assets/img/pasado.jpg
importance: 2
category: finished
---
Previous research has documented that Spanish heritage speakers occasionally extend **third-person** verb inflections (i.e., *comió* 'he/she/they<sub>SING</sub> ate') to **first-person** subjects (i.e., *yo comió* 'I ate <sub>3PS</sub>'). Although Spanish heritage speakers have been shown to use third-person inflections for first-person subjects in a variety of verb tenses, there has been no research that has examined this trend across verb tenses as to provide possible explanations of this extension. This project compares Spanish heritage speakers' production and comprehension of first- and third-person verb inflections across the preterite (i.e., _yo comí_, 'I ate') and present perfect (i.e., _he comido_, 'I have eaten') tenses. Given that the preterite tense is relatively more frequent than the present perfect tense, this project investigated if the frequency of use of certain verb tenses impacts heritage speakers' use and understanding of verb forms.

The project was guided by the following questions:
1. Do Spanish heritage speakers produce and/or comprehend sentences containing third-person verb inflections with first-person subjects?
2. Do Spanish heritage speakers produce and/or comprehend this extension at higher rates with the less frequent present perfect tense relative to the more frequent preterite tense?

This project found that when speaking, heritage speakers extend third-person inflections to first person subjects at a **mucher higher rate** with the **present perfect tense** (i.e., *yo ha comido* 'I have<sub>3PS</sub> eaten') than the preterite tense (i.e., *yo comió*, 'I ate<sub>3PS</sub>'). This asymmetry in third-person extensions also **appeared in comprehension**. In the comprehension task, participants listened to recordings containing sentences with third-person verb inflections and indicated whether the sentence referenced a first-person subject, a third-person subject, or whether it was unclear. Participants determined that sentences containing third-person inflections could possibly **refer to a first-person subject** at a much higher rate in the **present perfect tense** relative to the **preterite tense**.

Taken together, these findings indicate that the frequency of use of verb tenses impacts how Spanish heritage speakers understand and produce Spanish verb inflections, helping tell a more nuanced story about the factors that affect how heritage speakers use Spanish.

-project concluded- [co-authored manuscript](https://www.degruyterbrill.com/document/doi/10.1515/shll-2024-2011/html) published in Studies in Hispanic and Lusophone Linguistics
This project was conducted in collaboration with [Dr. David Giancaspro](https://lalis.richmond.edu/faculty/dgiancas/).

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
