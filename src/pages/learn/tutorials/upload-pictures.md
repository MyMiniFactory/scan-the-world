---
templateKey: tutorial-page
title: Photogrammetry
intro: >-
  The first step of the process and a skill to show off: learn how to make 3D
  models out of any photos! 
tutorialImage: /assets/photogrammetry-tutorial.jpg
---
**Photogrammetry** is the method we use to archive and recreate 3D objects, sculptures, and monuments, and we have compiled a tutorial below to help you get involved. You’ll need a camera, either a **smartphone** or a **DSLR**, and some software if you want to get recreating sculptures and objects at home. 

![](/assets/asset-1-2x.png)

## Taking Photos

There is no “correct” number of photos to take when photoscanning a sculpture. We recommend you take **at least 50** to capture most of the details, but some sculptures could require hundreds to get an accurate scan. It all depends on how good your photographs are!

Always try to **take more photos** than you think you’ll need - some may come out not as you expected, and it’s often harder to get back to the location you captured in than to just take more photos whilst you’re there.

![](/assets/elevations.png)

You can use anything you have available to take your photographs. A smartphone with a good camera is useful for portable, on-the-go data capture, but if you have a DSLR, you can use that too for very high-resolution images.

You should get as many angles as you can of your object. Your first set of images should show the **whole object** as you rotate around it at eye level. Then take additional images at **different levels of elevation**. Each photo should **overlap the last by about 60%**, but more overlap never hurts.

![](/assets/60_-overlap.jpg "The difference between the two images shows how much overlap is ideal")

Take additional photos showing the **detailed areas** of your object. If this is a sculpture, that could be the face, hands, or clothing.

![](/assets/details.jpg "Important details such as the hair and intricate fabric are important to capture for a sculpture like this")

Getting 360° of an object is not always possible. Try to capture as much as you can - in some cases, such as a bust, the back can be recreated easily in 3D mesh and modelling software.

Remember to get some **information** about your object or sculpture too! If there is a **small sign** giving information about the object, grab an image so we know more about it, such as who made it, when it was made, or any other information already available. If you’ve shot outside, then also note down **where** you found it - this could be the latitude and longitude, or the area in which the object is kept. We aim to preserve the history of the object, not just the object itself, so grabbing as much info as you can about the thing you’re photoscanning helps us and the community. 

## Lighting & Exposure

Making sure your images are **correctly exposed** is very important for photoscanning. Exposure is how bright or dark your image is; if it’s too bright or too dark, the photogrammetry software won’t be able to recreate your object

Smartphones should automatically change their settings to expose your images correctly - if not, many current phones allow for manual control to set exposure. If shooting on a DSLR, you could use the auto setting without flash, or if you’re comfortable with manual settings, you could use those also.

![](/assets/comparisons.jpg "It is important not to have dark shadows or bright highlights, as it removes details, seen above")

One way to tell if your image is correctly exposed is to look at a **histogram**. Many DSLRs can show you this after youve taken a photo, as will any good photo editing program like Photoshop or GIMP. Here, you can see the histograms for under-exposed, well-exposed, and over-exposed images. We want to aim for a curve on the graph that is roughly in the middle.

![](/assets/comparisons-histogram.jpg "Most good cameras and photo editing apps should show you a histogram")

Lighting your object is important. Try to get it as **evenly lit** as possible, but this is obviously not always doable.

When shooting outside, try to aim for an overcast but bright day. This helps to prevent strong shadows from forming on your object, or harsh highlights if it is shiny.

If you do end up shooting whilst the sun is out, there are some techniques that can help prevent issues later down the line. Try to use a polarising filter to reduce the influence of reflections and glare or block out the sun with your hand if it is in shot to prevent lens flares.

Try to **keep consistent light levels.** If the lighting changes outside, be sure to check your images to see that they are of a similar level.

You often may find yourself scanning indoors. In this case, light can often be more controlled, but that is not always possible. Try to set up temporary light sources, such as a soft flash, or a portable diffused light. Avoid harsh shadows where you can, as these shadows will be recreated in the final recreation and may produce unexpected results. Some shadows are ok though.

## Focusing

Photogrammetry software loves **sharp, in-focu**s images to work with.\
This means having the camera in focus (smartphones and many DSLRs do this automatically), and making sure to keep the camera **stable** when taking the image - **motion blur** caused by the camera moving will also prevent your object from being recreated (this can often be a problem when shooting in an **indoor situation with low-light**).

If shooting on a smartphone be sure to not enable the fake depth-of-field effect that can be applied on some modern phones, as this is **not true depth of field** and can cause issues.

![](/assets/motionblur.jpg "Whilst this motion blur is extreme, even slightly blurry images won’t produce the best possible results")

If shooting on a DSLR, try to use a small aperture (large f-stop, f 8 and above) to ensure as much of the sculpture is in focus as possible. This is more of a concern when shooting smaller objects, as depth-of-field becomes more pronounced.

## Noise

Noise can heavily mess up processing during photogrammetry. Noise is most commonly caused by having the **ISO** too high on your camera (for example, when shooting in low light), but other visual noise such as dirt on the camera lens can create issues too.

![](/assets/noise.jpg "Left: 3200 iso Right: 800 iso ")

Whilst you may not see it in the image at normal viewing scale, the software certainly does, and takes it into account during calculations.

Try to shoot somewhere where there is as much light as possible available, and to not set your ISO too high so the images do not become noisy.

## Challenging Objects

Photoscanning works **best with objects which are solid and matte**. Glossy objects often cause issues, because the highlights created can produce abnormal results in photogrammetry software. There are methods to reduce this glare, such as using a polariser to reduce the highlights. If you’re familiar with lighting and cameras, using a linear polariser on your lens and linearly polarising your light sources in the opposing direction to your camera’s polarizer (90°) can completely remove reflective qualities of an object.

![](/assets/shiny.jpg "A shiny object such as this would be very difficult to scan. Even with some editing in photoshop to reduce the highlights, the highlights will still pose an issue ")

Transparent objects must first be coated in something in order for photogrammetry software to understand what it is looking at. You can do this with white **matte coating spray**, or alternatively masking tape if that is all that is available, but that of course cannot be done in a museum or with an object that is not your own. This technique can also be used to capture shiny objects.

![](/assets/transobjs.jpg "The base of this sculpture may scan, but the crystal ball is likely to cause issues ")

Dark objects also pose a challenge. An object made in a material such as brass or black marble will be more difficult to scan than a white object. Photogrammetry software cannot so easily interpret dark areas of an image, and it will require more work to get the correct outcome from a dark object. For example, the object on the left will be far easier to scan than the object on the right.

![](/assets/blackvswhiteobjects.jpg "The bust on the left will scan very well, but the glossy, black surfaces of the right hand sculpture will be problematic")

## **Getting the most out of your scan**

Some software functions best when you **remove the background** detail of your images, leaving only the object itself for the software to process and interpret. Removing the background can be a time-consuming process but can be **worth it** to reduce potential headaches.

![](/assets/bgremoval.jpg)

Most DSLRs, and some high-end smartphones, can shoot in **RAW**. These images contain far more data about the light the camera captured, allowing you to reduce highlights and brighten shadows, or reduce noise in a more accurate way, without editing the image permanently. Photogrammetry software cannot usually work with RAW images, so if you are using them, you will need to process them in appropriate software first such as Adobe Lightroom or Photoshop. We advise shooting directly with **JPEG** images if you wish to save time or are not comfortable with using RAW.

## Software

There is a variety of software available to you that allows you to get involved with photogrammetry. 

There are many proprietary, paid-for solutions such as:

**Agisoft Metashape** - $179 for a standard license\
**Autodesk ReCap** - $40/£42 a month\
**RealityCapture** - €99

But there are plenty of free alternatives, including 

**3DF Zephyr** (has a 50 photo limit)\
**Colmap**

For photo editing, paid programs such as Adobe Photoshop and Lightroom are excellent, however GIMP is a good free alternative. 

Editing and cleaning up your produced 3D mesh is possible in MeshLab or Autodesk Meshmixer. Both are free to download, as is Blender for more 3D modelling oriented tasks.
