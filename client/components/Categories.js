import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

export const Categories = memo((props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const categorySelectHandler = (selected) => {
    setSelectedItem(selected);
    props.onCategorySelect(selected);
  };
  return (
    <View>
      <AutocompleteDropdown
        clearOnFocus={false}
        inputContainerStyle={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#383b42',
          shadowColor: '#00000099',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8.46,
        }}
        textInputProps={{
          placeholder: 'בחר קטגוריה',
          textAlign: 'center',
          style: {
            color: '#383b42',
          },
        }}
        closeOnBlur={false}
        onSelectItem={categorySelectHandler}
        dataSet={[
          { id: '1', title: 'פנגו - כחול לבן' },
          { id: '2', title: 'ארנונה' },
          { id: '3', title: 'ביטוח לעסק' },
          { id: '4', title: 'ביגוד רגיל (ללא לוגו של העסק)' },
          { id: '5', title: 'משכורות לעובדים' },
          { id: '6', title: 'כיבוד קל' },
          { id: '7', title: 'קנסות תעבורה' },
          { id: '8', title: 'השכרת רכב' },
          { id: '9', title: 'הוצאות עסקיות - חומרי עבודה (לא רכוש קבוע)' },
          { id: '10', title: 'הוצאות עסקיות - כלי עבודה (רכוש קבוע)' },
          { id: '11', title: 'מחשב נייד' },
          { id: '12', title: 'חניונים' },
          { id: '13', title: 'כבישי אגרה' },
          { id: '14', title: 'חשבון חשמל - למשרד' },
          { id: '15', title: 'אחזקת משרד' },
          { id: '16', title: 'אינטרנט - למשרד' },
          { id: '17', title: 'השתלמות מקצועית' },
          { id: '18', title: 'ביגוד מקצועי - עם לוגו של העסק' },
          { id: '19', title: 'הנהלת חשבונות' },
          { id: '20', title: 'הובלות ומשלוחים' },
          { id: '21', title: 'ציוד משרדי' },
          { id: '22', title: 'פרסום' },
          { id: '23', title: 'נסיעות במונית' },
          { id: '24', title: 'אפליקציה לניהול חשבונית / הוצאת חשבונית ירוקה' },
          { id: '25', title: 'חשבון חשמל - בבית (כאשר העסק עובד מהבית)' },
          { id: '26', title: 'אינטרנט - לבית (כאשר העסק עובד מהבית)' },
          { id: '27', title: 'דלק פרטי' },
          { id: '28', title: 'חשבון טלפון' },
          { id: '29', title: 'אוזניות' },
          { id: '30', title: 'טלפון' },
          { id: '31', title: 'תיקוני רכב / טסט - אופנוע / משאית' },
          { id: '32', title: 'דלק - אופנוע / משאית' },
        ]}
      />
      {/* <Text style={{ color: '#668', fontSize: 13 }}>
        Selected item: {JSON.stringify(selectedItem)}
      </Text> */}
    </View>
  );
});
