import pandas as pd
import numpy
from sklearn.naive_bayes import GaussianNB
df = pd.read_csv('./training_data.csv', header=0)
gnb = GaussianNB()
x_train = df.loc[:, df.columns != 'activity']
y_train = df['activity']
gnb_fit = gnb.fit(x_train, y_train)
y_pred = gnb_fit.predict_proba(numpy.array([3,4,2,1,4]).reshape(1,-1))
activities = list(set(y_train))
activities.sort()
probs = y_pred.tolist()
bigboy = [zip(i, activities) for i in probs]
smallboy = bigboy[0]
smallboy.sort(reverse=True)
print smallboy
# print numpy.argsort(gnb_fit.predict_proba(numpy.array([3,4,2,1,4]).reshape(1,-1)), axis=1)[-5:]
# print to std
