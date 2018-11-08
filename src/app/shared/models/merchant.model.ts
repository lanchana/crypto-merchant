export interface MerchantModel {
  uid: string;
  merchant_type: string;
  item_sold: string;
  amount_invoiced: number;
  currency_used_for_payments: string;
}
