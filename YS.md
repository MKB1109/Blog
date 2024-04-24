Gender Divergence in political attitudes: Evidence from a mixed effects regression analysis across European countries.

According to recent studies men and women have diverged substantially in their political alignment over the past 20 years or so (Murdoch-John, 2024). This trend is especially true for young women and men under 30 in advanced democracies. Historically, there has always been gender differences in terms of political alignment with men having a higher propensity toward conservative values and women being more progressive. However, if the results from these recent studies are true then this gender divergence has increased starkly in young people under 30. What factors could be a driving force between this divergence?

As this divergence has occurred the political landscape has shifted from a traditional left/right wing divide to a focus on the so called “culture wars” and immigration, particularly in Europe and North America. Many studies have pointed to the fact that this new political cleavage between those in favor of policies for diversity, equity and inclusion (DEI) have pushed men away from the left altogether seeing as this group view these policies as being too far reaching and unfair (Hopke, 2022). EID policies are very broadly defined as: “a term used to describe policies and programs that promote the representation and participation of different groups of individuals” (Fogarty, Trinityservices). They are especially associate with the promotion of groups such as LGBTQ individuals, women, minority ethnic groups of people of color and physical disabilities. This scope of these polices varies based on institutional context and the definition given here is not meant to be exhaustive.

On the other hand, immigration has risen as a salient issue throughout the 2010s. The reasons for this many folds, but the refugee crises of the era contributed the prominence of this issue in the media for many years. Studies on gender as a predictor for attitudes toward immigration have shown that men are consistently more conservative in this area than women.

Methodology:
In order to investigate this development further I have compiled data from the European Social Survey (ESS) from 2016 ( round 8 of the survey). The case of study of political gender divides in different European countries is in and of itself an interesting research area, but for practical reasons the ESS was chosen since it is quite an easy and accessible dataset to work with. The selection criterions used were to maximize the number of available years for as many countries as possible. I also restricted the analysis to people under 30 for each country per year. I thus ended up with a total of 12 different countries for this time period and N= 4010.

The final dataset is thus structured as a cross-sectional hierarchical dataset, meaning that individuals are nested within countries. For this reason, mixed effects linear regression was an obvious choice for statistical analysis. Mixed effects regression models allow us to control for fixed effects ( i.e individual level predictor variables such as political attitudes) and allows us to account for random effects over different years p. Moreover, the strong assumptions for linear regression are quite beneficial for assurances of model validity. The most vital of these assumptions is that the relationship between the predictors and the outcome variable can be modelled linearly. Other assumptions include the normality of the residuals and the independence of the residuals(Shaw & Flake). Briefly explained; when we assume that the residuals of a linear model are normally distributed, we confirm whether the residuals are spread around zero and if they have a typical bell curve distribution (aka. A normal distribution). The independence of residuals refers to whether the actual values of our model are not correlated with each other. If they were correlated then this would pose a problem because we would be unsure what we were actual measuring and thus could not attribute coefficient estimates to the right predictor in our model. Residuals are defined as the difference between the obeserved and fitted values in our model(s). These assumptions and other model fit checks are investigated further in the appendix. Below is the description of the variables used in the analysis.



|Variable                                   |Description                                                     |
|:------------------------------------------|:---------------------------------------------------------------|
|Gender                                     |1 = Men, 2 = Women                                              |
|Attitude towards LGBTQ Rights(freehms)     |1 = Agree Strongly, 5 = Disagree Strongly                       |
|Immigration Policy(impcntr)                |1 = Allow Many, 2 = Allow Some, 4 = Allow None                  |
|Income Satisfaction(hincfel)               |1 = Living Comfortably, 4 = Difficult to Live on Current Income |
|Trust in Political Parties(trstprt)        |0 = No Trust, 10 = Complete Trust                               |
|Satisfaction with Democrac(stfdem)y        |0 = Extremely Dissatisfied, 10 = Extremely Satisfied            |
|Satisfaction with National Economy(stfeco) |0 = Extremely Dissatisfied, 10 = Extremely Satisfied            |
|Impact of Immigrants on Country(imwbcnt)   |0 = Worse Place to Live, 10 = Better Place to Live              |
|Educational Level(eisced)                  |0 = No Schooling, 7 = MA Level                                  |
|Life Satisfaction(stflife)                 |0 = Extremely Dissatisfied, 10 = Extremely Satisfied            |


Analysis
By plotting the average difference between men and women’s ideological differences, we can obtain a snapshot of where these potential differences may be the most pronounced. The plot below illustrates this by coding countries according to their mean ideological difference between men and women. The mean difference was in this context calculated as the mean of women minus the mean of the mean. Thus, we can interpret the map below as men in most countries tend to be more conservative (since conservative values are coded as higher in the ESS). Some countries are quite noticeable on either scale. First off, both Ireland and Hungary have tils toward having more conservative women. The mean difference is not substantial as it is only 0.5 points on the political alignment scale. On the other hand, we can see that countries which are seen as gender egalitarian such as Finland and The Netherlands have on average a larger gender divergence by 1 point on the political alignment scale.

![Map](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde10.png)

By investigating these data further via regression modelling we can get a deeper understanding for what might be the correlates for this divergence phenomena. The results from this null model shows that being female is associated with a decrease in ideological self-placement holding all other variables constant. Likewise, we can see that attitudes toward LGBTQ individuals and attitudes toward immigration have comparatively strong estimates in terms of magnitude. For example, people who are unsupportive of the LGBTQ community are associated with an 0.17 increase in right wing ideological alignment. The predictors impcntr and imwbcnt show that people who think immigrants make their country a worse place to live and people who do not support letting in immigrants from poor countries outside of Europe -are more associated with being right wing leaning. Similarly, we can see that people who have high life statistician and income tend to be more conservative leaning. For predictors such as satisfaction with the national economy, democracy and trust in political parties we can see that people who report satisfaction with these measures are correlated with being more conservative. However, the estimates for these predictors are comparatively small. This means that in case of this model these predictors do not have that much of an impact individually on a person’s ideological alignment in a political sense. Many of the predictors in this model are statistically significant at the 0.05 level, meaning that they these variables seem to play an important role in a person’s ideological alignment. It is noticeable that age does not seem to be that important in the context of this regression model. This might be because the sample of this study consists of only people under 30. Thus, a within-generational divide between people under 30 in these countries is not detected at this specific time-point according to this data.

![Null model](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde1.png)
![Interaction model](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde2.png)

By investigating possible interactions we can investigate this penhomena further. Three possible interaction combinations with gender are attitudes toward welcoming immigrants outside of europe, attitudes toward LGBTQ individuals and if a person feel that immigrants make their country a better place to live or not. These interactions are interesting because from the previous model we have seen that they have strong estimated effects on political self-placement for people unedr 30. Moreover, we can observe that interaction plots for this model are parallel. This suggests that the relationship between the predicotor and the response variable does not depend on the levels of the other predictor variable( called a moderator).

In the case of the LGBTQ plot there is a turning point at the midway juncture in the interaction plot between gender and attitudes toward LGBTQ indviduals. As the interaction plot illustrates we can see that men and women who are accepting of LGBTQ individuals have starker differences than men and women who are unsupprotive of this community. Therefore we can observe that men who hold pro-LGBTQ views are more left wing than women who hold the same views. Since the slopes in this interaction are parallel we cannot infer that gender has a significant impact on the relationship between LGBTQ acceptance and political alignment. However, there is a noticable trend that as a person becomes more unsupportive of LGBTQ individuals there is a narrower gap between the genders.  
The interaction term between gender and welcoming attitudes toward immigrants outside of Europe paints a similar picture. Altough this interaction plot is largely defined by parallelism, we can observe a that the gaps also becomes less widened for conservative indllllgtfivdiuals. The tail end of this plot can be interpereted as there being quite a difference between men and women who are welcoming of migrants. It seems that women who share this view are more staunchly left than men who have the same view.

<img src="https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde8.png" alt="Interaction1" width="300" height="200">

![Interaction2](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde9.png)

Reflections
The results found in this study are consistent with previous academic research in the area. By examining attitudes over time and exaimining interaction effects we can observe that issues such as immigration and acceptance of LGBTQ indviduals are potential driving forces for the divergence young men and women’s political alignment. It’s important to stress that the results from this analysis do not imply causation and are simply attitudes correlated with political alignment in sample data. In addition various studies such as “Political socialization, political gender gapns and the intergenerational transmission of left-right ideology” by Mathilde M. Van Ditmars(2022).Have shown that there has been a left-wing turn among young girls in certain countries. Van Ditmars also found that found that left-leaning parents have an advantage in instilling their political ideology particularily if their child is a girl. This view is further refined by the fact that the same study found that daugthers and sons are on diverging ends politically compared to mothers and fathers. Daugthers were more likely to adopt leftist positions compared to sons, and they are less likely to adopt rightist positons from their parents.

It is plausible that we live in an era where value oriented questions are a driving force between new political cleavges according to gender. The Gender-Personality-Paradox(GEPP) is a penhomena which states that gender differences differences in persoanlity are at their largest in the most gender equal countries(Connolly et al. 2019). Causes for this observed gender trend in differing values between young men and women have been studied by scoicological scholars amongst others. Using ESS data from 8 rounds for 32 European countries( N = 235, 339) Filip F. Connolloy et al.( 2019) invesigated the relationship between gender and personal values. Their results helped nuance the penhomena of GEPP by showing that their has been a large amount of convergence over time as well between men and women when it comes to what these researchers called “basic human values”. Their results showed that men and women have converged on values related to achievement and power. Values in achievement and power were defined as demonstrating competence (achievement) and social status( prestige, control, dominance) over people and resources.In light of feminist movements and political parties adovacting for more female execcutives, CEOS and women in positions of power more generally then this finding is not entierly unsurpsing. The study also found that men and women have convereged when it comes to what the researchers termed as “benevolence”. Benevolence was defined in this study as “perservation and enhancement of the welfare of people with whom one is in frequent personal contact”(Connolloy et al. 2019. p. 105). This suggest that young men have come value the welfare of their local community substantially over time. In this regard it makes sense that young men have more adverse attitudes toward immigration from more far away countries since their priotity seem to lie with what they know from day-to-day life.

In the context of the analysis conducted here, we are thus able to reach some tenative conclusions. According to the date used in this study, there seems to be little indication of a stark sgnificance between men and women in regards to attitudes toward the LGBTQ community and immigration issues. However, this study does find inidvidually these issues along with gender are significant predictors of left/right wing ideological self-placement. Thus, it seems that based on this specific sample from one round of the ESS that gender does not play a significant role in the interaction between the political cleavages investigated and political alignment.

Bibliography:

Murdoch-Burn John(2024). Financial Times. https://www.ft.com/content/29fd9b5c-2f35-41bf-9d4c-994db4e12998

Ponce, A. (2017). Gender and Anti-immigrant Attitudes in Europe. Socius, 3. https://doi.org/10.1177/2378023117729970 https://journals.sagepub.com/doi/10.1177/2378023117729970

VAN DITMARS, M.M. (2023), Political socialization, political gender gaps and the intergenerational transmission of left-right ideology. European Journal of Political Research, 62: 3-24. https://doi.org/10.1111/1475-6765.12517
https://ejpr.onlinelibrary.wiley.com/doi/full/10.1111/1475-6765.12517

Teresa, Hopke. 2022. White Men Are Feeling Left Out Of Diversity, Equity, & Inclusion. Why Should We Care and What Should We Do?https://www.forbes.com/sites/teresahopke/2022/03/30/white-men-are-feeling-left-out-of-dei-diversity-equity--inclusion-why-should-we-care-and-what-should-we-do/

European Social Survey European Research Infrastructure (ESS ERIC) (2023) ESS8 - integrated file, edition 2.3 [Data set]. Sikt - Norwegian Agency for Shared Services in Education and Research. https://doi.org/10.21338/ess8e02_3.


Trinityservices. Fogarty, Tina. https://www.trinityservices.org/who-we-are/diversity-equity-inclusion-committee

Shaw, Mairead & Flake, K. Jessica. https://www.learn-mlms.com/12-module-12.html

Appendix:
In order to assure the validity of validity of the results from my models it is necessary to preform diagnostics tests. Linear mixed regression has various assumptions which are necessary to fulfil for the models to be valid and reliable. These assumptions do not tell us anything about the actual causal relationships or inferences from the results of the regression models, but they are important to preform in order for the results to be valid themselves.

1. Linearity assumption
   The linearity assumption states that our explantory variables should be linearly related to our outcome variable. From the plots shown below, we can see that this assumption is fulfilled. 
![linearity](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde3.png)

3. cook’s distance
   Cook’s distance is a measure to detect outliers. I chose to color datapoints above 4/n as potential outliers, but as we can see the datapoints are within acceptable range. 

![Cook's distance](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde6.png)

4. Normality of residuals
   If we look at the histogram below then it becomes evident that the residuals are normally distributed. Residuals are the difference between the predicted and observed values of our data. Because of this they are also known as “errors” because they are the “errors” between what we predicted and the actual observations. Since this study used linear regression we have to check if our data can actually be modelled in a linear way, thus it’s important to check the distribution of our erros.
   

![Residual distribution](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde4.png)
![Residual plot](https://github.com/MKB1109/Blog/blob/81d288398228a4091d91111d3bf9d97b78515758/Bilde5.png)


Below we can see the cor.test results from the level 1 predictor variables in our model. This is a test for checking the independence of our residuals. We do this in order to check if our residuals have constant variance. A state of constant variance is good since it means that there is not a pattern in our residuals correlate to our predictors centered within cluster. Since the correlations here are all close to zero, we can determine that they are independent.
print(cor_test_df)
         predictor           cor p_value
cor...1    stflife -2.492075e-15       1
cor...2    freehms -8.583857e-16       1
cor...3     stfeco -4.636724e-16       1
cor...4    trstprt -3.175881e-16       1
cor...5     stfdem  8.847150e-17       1
cor...6    imwbcnt -2.771699e-16       1
cor...7       gndr -2.867550e-15       1
cor...8       agea -2.675657e-15       1
cor...9     eisced -5.429618e-16       1
cor...10   hincfel -1.005499e-15       1
cor...11   impcntr -1.031232e-15       1



