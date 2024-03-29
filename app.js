import express from 'express';
import {pinoHttp, logger} from './utils/logging.js';
import React, { useState, useEffect, useCallback} from 'react';
import { css, jsx } from '@emotion/react'
import {
  Button,
  Input,
  Row,
  Col
} from "reactstrap";

const app = express();

app.use(pinoHttp);

app.get('/', async (req, res) => {
  logger.info({logField: 'custom-entry', arbitraryField: 'custom-entry'});
  req.log.info('Child logger with trace Id.');

  // Define the HTML content to be returned
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <title>Portail DPI Portal</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        h1 {
            color: black; /* Fixed property name from text-color to color */
            padding-top: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        input {
            height: 45px;
            border-radius: 28px;
            border: 1px solid #ccc;
            width: 700px;
            font-size: 16px; /* Changed from 'font' to 'font-size' */
            outline: none;
            padding-left: 10px; /* Adjusted placeholder padding */
        }
        .info-text {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 30px;
        }
    </style>
</head>
<body>
    <div>
        <h1>Explorateur d'actualités sur la santé | Health News Explorer</h1>
        <script src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"></script>
        <gen-search-widget
          configId="a0c6667a-bd31-407a-bdeb-4b661af1ad52"
          triggerId="searchWidgetTrigger">
        </gen-search-widget>
        <div class="info-text">
        <input placeholder="Poser une question | Ask a question" id="searchWidgetTrigger" />
        </div>
        <div class="info-text">
            <small><i>*Ceci est une mise en œuvre expérimentale et en cours de développement de la composante de recherche Vertex AI de Google. Les réponses fournies peuvent contenir des erreurs. Vérifiez toujours les informations importantes à l'aide de plusieurs sources pour en assurer l'exactitude.</i></small>
        </div>
        <div class="info-text">
            <small><i>*This is a work-in-progress experimental implementation of Google's Vertex AI Search. The answers given may contain errors. Always verify important information using multiple sources for accuracy.</i></small>
        </div>
        <div class="info-text">
            <a href="https://cloud.google.com/vertex-ai-search-and-conversation?hl=en" target="_blank"><span>À propos de Vertex AI || About Vertex AI</span></a>
            <span style="padding-left: 30px;"><a href="mailto:chris.melnick-macdonald@phac-aspc.gc.ca">Contactez-nous | Contact Us</a></span>
        </div>
        <div class="info-text">
        <small><i>Cette recherche Vertex AI utilise les sites suivants  | This Vertex AI Search uses the following sites: 
        technologyreview.com/topic/biotechnology/*
        *.mobihealthnews.com/*
        cbc.ca/news/health*
        *.healthitoutcomes.com/*
        *.healthcaredive.com/*
        *.mmm-online.com/*
        *.modernhealthcare.com/*
        *.pharmacytimes.com/*
        time.com/section/health/*
        *.beckershospitalreview.com/*
        medpagetoday.com/latest*
        *.medscape.com/*
        newscientist.com/subject/health/*
        nytimes.com/section/health*
        knowablemagazine.org/content/health-disease*
        livescience.com/health*
        *.mdedge.com/*
        *.medicaldaily.com/*
        *.medicalnewstoday.com/*
        *.medgadget.com/*
        *.discovermagazine.com/*
        forbes.com/healthcare/*
        *.fiercehealthcare.com/*
        health.harvard.edu/*
        *.hcplive.com/*
        *.healthleadersmedia.com/*
        *.healthaffairs.org/*
        *.kffhealthnews.org/*
        practiceupdate.com/explore/*
        npr.org/sections/health-shots*
        abcnews.go.com/Health/*
        *.the-hospitalist.org/*
        quantamagazine.org/biology/*
        theatlantic.com/health/*
        *.pharmaceutical-journal.com/*
        reuters.com/business/healthcare-pharmaceuticals/*
        bbc.com/news/health*
        *.fiercebiotech.com/*
        scientificamerican.com/health/*
        *.clinicaladvisor.com/*
        *.healthcareitnews.com/*
        *.statnews.com/*
        edition.cnn.com/health*
        *.imedicalapps.com/*
        *.medicalxpress.com/*
        who.int/news*
        </i></small>
    </div>
</body>
</html>`;

  // Use res.send() to return the HTML content
  res.send(htmlContent);
});

export default app;
