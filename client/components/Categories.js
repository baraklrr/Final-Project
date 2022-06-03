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
          { id: '1', title: 'דלק' },
          { id: '2', title: 'פנגו - כחול לבן' },
          { id: '3', title: 'ארנונה' },
          { id: '4', title: 'ביטוח לעסק' },
          { id: '5', title: 'ביגוד רגיל (ללא לוגו של העסק)' },
          { id: '6', title: 'משכורות לעובדים' },
          { id: '7', title: 'כיבוד קל' },
          { id: '8', title: 'קנסות תעבורה' },
          { id: '9', title: 'השכרת רכב' },
          { id: '10', title: 'הוצאות עסקיות - חומרי עבודה (לא רכוש קבוע)' },
          { id: '11', title: 'הוצאות עסקיות - כלי עבודה (רכוש קבוע)' },
          { id: '12', title: 'מחשב נייד' },
          { id: '13', title: 'חניונים' },
          { id: '14', title: 'כבישי אגרה' },
          { id: '15', title: 'חשבון חשמל - למשרד' },
          { id: '16', title: 'אחזקת משרד' },
          { id: '17', title: 'אינטרנט - למשרד' },
          { id: '18', title: 'השתלמות מקצועית' },
          { id: '19', title: 'ביגוד מקצועי - עם לוגו של העסק' },
          { id: '20', title: 'הנהלת חשבונות' },
          { id: '21', title: 'הובלות ומשלוחים' },
          { id: '22', title: 'ציוד משרדי' },
          { id: '23', title: 'פרסום' },
          { id: '24', title: 'נסיעות במונית' },
          { id: '25', title: 'אפליקציה לניהול חשבונית / הוצאת חשבונית ירוקה' },
          { id: '26', title: 'חשבון חשמל - בבית (כאשר העסק עובד מהבית)' },
          { id: '27', title: 'אינטרנט - לבית (כאשר העסק עובד מהבית)' },
          { id: '28', title: 'טלפון' },
          { id: '29', title: 'אוזניות' },
          { id: '30', title: 'חשבון טלפון' },
        ]}
      />
      {/* <Text style={{ color: '#668', fontSize: 13 }}>
        Selected item: {JSON.stringify(selectedItem)}
      </Text> */}
    </View>
  );
});
