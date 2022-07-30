import pandas as pd
import itertools
import os



def getFilter(q,o):
    current_directory = os.getcwd()
    file_d = current_directory + '/options.csv'
    qoptions = pd.read_csv('options.csv')
    return qoptions['value'][(qoptions['question'] == q) & (qoptions['option'] == o) ].values[0]
def getGroups(groupSize=20,df=None,qoptions=None):
    groupingList = pd.DataFrame(columns=['email','group','filter1','filter2','filter3'])
    combiList = list(itertools.combinations(range(1, 11), r=3))
    a = 1
    b = 2
    c = 3
    currentGroupNo = 1
    for eachCombi in combiList: 
        a = eachCombi[0]
        b = eachCombi[1]
        c = eachCombi[2]        
        qa = 'q'+str(a)
        qb = 'q'+str(b)
        qc = 'q'+str(c)
        x = df.groupby([qa,qb,qc])
        
        for name, group in x:
            currentGroup= None    
            if(len(group)>groupSize):
                currentGroup =  group[:groupSize]
                cond = df['email'].isin(currentGroup['email'])
                df.drop(df[cond].index, inplace = True)
                currentGroup = currentGroup.reset_index(drop=True)
                f1 = currentGroup[qa].iloc[0]
                f2 = currentGroup[qb].iloc[0]
                f3 = currentGroup[qc].iloc[0]
                fv1 = getFilter(qa,f1)
                fv2 = getFilter(qb,f2)
                fv3 = getFilter(qc,f3)
                groupno = 'Group ' + str(currentGroupNo)
                currentGroup['group'] = groupno
                currentGroup['filter1'] = fv1
                currentGroup['filter2'] = fv2
                currentGroup['filter3'] = fv3
                currentGroup.drop(['q1', 'q2','q3','q4','q5','q6','q7','q8','q9','q10','q11'], axis=1, inplace=True)
                currentGroupNo +=1
                groupingList =  groupingList.append(currentGroup,ignore_index=True)
 ##################################################################################################################################################   
    if(len(df)>groupSize):
        retGroup = getGroups2Crit(groupSize,df,qoptions,currentGroupNo)
        groupingList = groupingList.append(retGroup,ignore_index=True) 
    if(len(df)<=groupSize): 
            gno = 1           
            for index, row in df.iterrows():
                if(gno>=currentGroupNo):
                    gno=1
                email = row['email']
                groupno = 'Group ' + str(gno)
                fv1rest = groupingList['filter1'][groupingList['group'] == groupno ].values[1]
                fv2rest = groupingList['filter2'][groupingList['group'] == groupno ].values[1] 
                fv3rest = groupingList['filter3'][groupingList['group'] == groupno ].values[1] 
                dflast = {'email':email,'group':groupno,'filter1':fv1rest,'filter2':fv2rest,'filter3':fv3rest}
                groupingList =  groupingList.append(dflast,ignore_index=True)
                gno+=1       
    return groupingList

def getGroups2Crit(groupSize=20,df=None,qoptions=None,currentGroupNo=1):
    groupingList = pd.DataFrame(columns=['email','group','filter1','filter2','filter3'])
    combiList = list(itertools.combinations(range(1, 11), r=2))
    a = 1
    b = 2
    for eachCombi in combiList:
        if(len(df)<=groupSize):            
            break
        
        a = eachCombi[0]
        b = eachCombi[1]       
        qa = 'q'+str(a)
        qb = 'q'+str(b)
        x = df.groupby([qa,qb])
        for name, group in x:
            if(len(df)<=groupSize):
                break
            currentGroup= None    
            if(len(group)>groupSize):
                currentGroup =  group[:groupSize]
                cond = df['email'].isin(currentGroup['email'])
                df.drop(df[cond].index, inplace = True)
                currentGroup = currentGroup.reset_index(drop=True)
                f1 = currentGroup[qa].iloc[0]
                f2 = currentGroup[qb].iloc[0]
                
                fv1 = getFilter(qa,f1)
                fv2 = getFilter(qb,f2)
                
                groupno = 'Group ' + str(currentGroupNo)
                currentGroup['group'] = groupno
                currentGroup['filter1'] = fv1
                currentGroup['filter2'] = fv2
                currentGroup['filter3'] = "N/A"
                currentGroup.drop(['q1', 'q2','q3','q4','q5','q6','q7','q8','q9','q10','q11'], axis=1, inplace=True)
                currentGroupNo +=1
                groupingList =  groupingList.append(currentGroup,ignore_index=True)
    if(len(df)>groupSize):
        retGroup = getGroups1Crit(groupSize,df,qoptions,currentGroupNo)
        groupingList = groupingList.append(retGroup,ignore_index=True)
    return groupingList

def getGroups1Crit(groupSize=20,df=None,qoptions=None,currentGroupNo=1):
    groupingList = pd.DataFrame(columns=['email','group','filter1','filter2','filter3'])
    combiList = list(range(1, 11))
    a = 1
    for eachCombi in combiList:
        if(len(df)<=groupSize):            
            break 
        a = eachCombi 
        qa = 'q'+str(a)
        x = df.groupby(qa)
        for name, group in x:
            if(len(df)<=groupSize):
                break
            currentGroup= None    
            if(len(group)>groupSize):
                currentGroup =  group[:groupSize]
                cond = df['email'].isin(currentGroup['email'])
                df.drop(df[cond].index, inplace = True)
                currentGroup = currentGroup.reset_index(drop=True)
                f1 = currentGroup[qa].iloc[0]             
                fv1 = getFilter(qa,f1)          
                groupno = 'Group ' + str(currentGroupNo)
                currentGroup['group'] = groupno
                currentGroup['filter1'] = fv1
                currentGroup['filter2'] = "N/A"
                currentGroup['filter3'] = "N/A"
                currentGroup.drop(['q1', 'q2','q3','q4','q5','q6','q7','q8','q9','q10','q11'], axis=1, inplace=True)
                currentGroupNo +=1
                groupingList =  groupingList.append(currentGroup,ignore_index=True)
    return groupingList
              